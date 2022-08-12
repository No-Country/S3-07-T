import express from "express"
import authController from "../controllers/auth.controller"
import {verifyEmail} from "../middlewares/verifyEmail"
const router = express.Router()

const { signUp, signIn } = authController

router.post("/signUp", verifyEmail,signUp)
router.post("/signIn", signIn)
//router.post("/signIn",authCtrl.)

module.exports = router
