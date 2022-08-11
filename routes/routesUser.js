import express from "express"
import userController from "../controllers/user.controller"

const router=express.Router()
const {searchxId,editUser}=userController

router.get("/searchxId/:id",searchxId);
router.put("/editUser/:id",editUser)


module.exports=router