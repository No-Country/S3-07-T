import { Router } from 'express'
const validateFields = require('../helpers/validateFields')
import userController from '../controllers/user.controller'
import authMiddlewares from './../middlewares/auth.middlewares'

const { isSameUser, auth } = authMiddlewares

const router = Router()
const {
  searchxId,
  editUser,
  listUser,
  deleteUser,
  editEmail,
  uploadAvatar,
} = userController
const upload = require('../middlewares/uploadAvatar')

router.get('/searchxId/:id', auth, searchxId)

router.put('/editUser/:id', auth, isSameUser, editUser)

router.get('/listUser', auth, listUser)

router.get('/deleteUser/:id', auth, deleteUser)

router.put('/editEmail/:id', auth, isSameUser, editEmail)

router.put(
  '/editAvatar/:id',
  auth,
  isSameUser,
  upload.single('avatar'),
  uploadAvatar,
)

export default router
