import express from "express"
import userController from "../controllers/user.controller"

const router=express.Router()
const {searchxId}=userController

router.get("/searchxId/:id",searchxId);

module.exports=router