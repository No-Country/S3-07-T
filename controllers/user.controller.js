import User from '../models/user'

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
      roles: buscado.roles,
      status: buscado.status,
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

const listUser = async (req, res, next) => {
  const list = await User.find({}, { password: 0 })
  if (list.length > 0) {
    res.status(200).json({
      list,
    })
  } else
    res.status(204).json({
      msg: 'no hay usuarios',
    })
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

export default {
  searchxId,
  editUser,
  listUser,
  deleteUser,
  editEmail,
}