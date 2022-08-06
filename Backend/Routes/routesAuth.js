const express=require("express")
const router=express.Router()

const {signUp}=require("../controllers/auth.controller")


router.post("/signUp",signUp)
//router.post("/signIn",authCtrl.)

module.exports= router