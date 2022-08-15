import { Router } from 'express'
import authController from '../controllers/auth.controller'
import { verifyEmail } from '../middlewares/verifyEmail'

const router = Router()

const { signUp, signIn } = authController

router.post('/signUp', verifyEmail, signUp)
router.post('/signIn', signIn)
//router.post("/signIn",authCtrl.)

export default router
