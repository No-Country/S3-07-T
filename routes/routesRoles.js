import { Router } from 'express'
import roleController from './../controllers/role.controller'

const router = Router()

const { rolesCont } = roleController

router.post('/roles', rolesCont)

export default router
