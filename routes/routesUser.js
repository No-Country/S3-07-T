import express from "express"
import userController from "../controllers/user.controller"

const router=express.Router()
const {searchxId,editUser,listUser}=userController

router.get("/searchxId/:id",searchxId);
router.put("/editUser/:id",editUser)
router.get("/listUser",listUser)

module.exports=router