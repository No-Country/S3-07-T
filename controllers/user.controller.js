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
      email: buscado.email,
      roles: buscado.roles,
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
  const { firstName, lastName, description } = req.body
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    description: description,
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

// const listUser=async (req,res,next)=>{
//   const list=
// }

export default {
  searchxId,
  editUser,
}
