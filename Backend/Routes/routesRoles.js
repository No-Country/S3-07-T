
const express=require("express")
const router=express.Router()

const {rolesCont}=require("../controllers/roles.controller")

router.post("/roles",rolesCont)

module.exports=router