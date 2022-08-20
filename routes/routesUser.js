import { Router } from 'express'
const validateFields = require("../helpers/validateFields");
import userController from '../controllers/user.controller'
const router = Router()
const { searchxId, editUser, listUser, deleteUser, editEmail,searchxName,uploadAvatar} = userController
const upload = require('../middlewares/uploadAvatar')

router.get('/searchxId/:id', searchxId)
router.put('/editUser/:id', editUser)
router.get('/listUser', listUser)
router.get('/deleteUser/:id', deleteUser)
router.put('/editEmail/:id', editEmail)
router.get('/searchxName/', searchxName)
router.put("/editAvatar/:id", upload.single('avatar') ,uploadAvatar)

export default router