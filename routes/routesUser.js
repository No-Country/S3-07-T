import { Router } from 'express'
import userController from '../controllers/user.controller'
const router = Router()
const { searchxId, editUser, listUser, deleteUser, editEmail,searchxName} = userController

router.get('/searchxId/:id', searchxId)
router.put('/editUser/:id', editUser)
router.get('/listUser', listUser)
router.get('/deleteUser/:id', deleteUser)
router.put('/editEmail/:id', editEmail)
router.get('/searchxName/', searchxName)

export default router