import express from 'express'
import Role from '../models/role'

const rolesCont = async (req, res) => {
  const { name } = req.body
  const newRole = new Role({
    name: name,
  })
  await newRole.save()
  res.status(200).json({
    mge: 'rol creado',
  })
}

module.exports = {
  rolesCont,
}
