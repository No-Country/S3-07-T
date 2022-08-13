import express from "express"
import userController from "../controllers/user.controller"

const router=express.Router()
const {searchxId,editUser,listUser,deleteUser}=userController

router.get("/searchxId/:id",searchxId)
router.put("/editUser/:id",editUser)
router.get("/listUser",listUser)
router.get("/deleteUser/:id",deleteUser)


module.exports=router