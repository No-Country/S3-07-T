import express from "express"
import roleController from "./../controllers/role.controller"

const router = express.Router()

const { rolesCont } = roleController

router.post("/roles", rolesCont)

module.exports = router
