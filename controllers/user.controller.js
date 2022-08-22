import User from '../models/user'
const imgbbUploader = require("imgbb-uploader");
let fs = require('fs')
require('dotenv').config();
let path = require('path')

const searchxId = async (req, res) => {
  const id = req.params.id
  const buscado = await User.findById(id)

  if (buscado) {
    const UserSprint = {
      id: buscado.id,
      firstName: buscado.firstName,
      lastName: buscado.lastName,
      description: buscado.description,
      rolDes: buscado.rolDes,
      phone: buscado.phone,
      email: buscado.email,
      role: buscado.role,
      status: buscado.status,
      avatar:buscado.avatar
    }

    res.status(200).json({
      UserSprint,
    })
  } else
    res.status(204).json({
      msg: 'no se encontro el usuario',
    })
}

const editUser = async (req, res, next) => {
  const id = req.params.id
  const { firstName, lastName, description, rolDes, phone } = req.body
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    description: description,
    rolDes: rolDes,
    phone: phone,
  }
  try {
    await User.findByIdAndUpdate(id, newUser, { userFindModify: true })
    res.status(200).json({
      msg: 'usuario modificado',
    })
  } catch (error) {
    next(error)
  }
  console.log(newUser)
}

const editEmail = async (req, res) => {
  const idUser = req.params.id

  const { email } = req.body
  console.log(email)
  const search = await User.findOne({ email })
  if (!search) {
    const newEmail = {
      email: email,
    }

    try {
      await User.findByIdAndUpdate(idUser, newEmail, { userFindModify: true })
      res.status(200).json({
        msg: 'email modificado',
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.status(204).json({
      msg: 'usuario ya existe',
    })
  }
}

const listUser = async (req, res) => {
  const { page, limit } = req.query
  const options = {
    select: 'firstName lastName email',
    page: page ?? 1,
    limit: limit ?? 10,
  }
  try {
    const list = await User.paginate({}, options)
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json({
      message: 'Error while list',
    })
  }
}

const deleteUser = async (req, res, next) => {
  const idUser = req.params.id

  const newUser = {
    status: false,
  }

  try {
    await User.findByIdAndUpdate(idUser, newUser, { userFindModify: true })
    res.status(200).json({
      msg: 'usuario eliminado',
    })
  } catch (error) {
    next(error)
  }
}

const searchxName = async(req, res) => {
  try {
    const query = req.query
    const firstQuery = query.firstQuery || " "
    const secondQuery = query.secondQuery
    let search
  
    // Pueden venir dos querys o uno, el primer query puede ser tanto un nombre como un apellido por eso no se especifican los querys y lo mismo con el segundo query 
    if(firstQuery !== undefined && secondQuery !== undefined) {
      search = await User.find({ firstName: firstQuery, lastName: secondQuery }, {password:0})
      if (search.length === 0) {
        search = await User.find({ firstName: secondQuery, lastName: firstQuery }, {password:0})
      }
    }else{
      search = await User.find({ firstName: firstQuery }, {password:0})
      if (search.length === 0) {
        search = await User.find({ lastName: firstQuery }, {password:0})
      }
    }
  
    if(search.length > 0){
      res.status(200).json({search})
    }else {
      res.status(204).json({
      search: [],
      msg:"usuario no encontrado"
      })
    }
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
}


const uploadAvatar = async (req, res, next) => {
  try {
    let response = await imgbbUploader(process.env.API_KEY_IMGBB, path.join(__dirname, `../files/${req.file.filename}`))
    if(response){
      console.log(fs.existsSync(path.join(__dirname, '../files/' + req.file.filename)))
      if (fs.existsSync(path.join(__dirname, '../files/' + req.file.filename)) && req.file.filename !== "default-image.png") {
        fs.unlinkSync(path.join(__dirname,`../files/${req.file.filename}`))
      } else {
        console.log('no se encontro el archivo')
      }
    }
    await User.findByIdAndUpdate(req.params.id, {avatar : response.url}, { userFindModify: false })
    res.status(200).json({
      msg: "usuario actualizado",
      response
    });
    // res.sendFile(path.join(__dirname,'../files/' + req.file.filename))
  } catch (error) {
    next(error)
  }
  
}

export default {
  searchxId,
  editUser,
  listUser,
  deleteUser,
  editEmail,
  searchxName,
  uploadAvatar
}