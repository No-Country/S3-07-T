import { Router } from "express"

import teamController from "../controllers/team.controller"

const router = Router()
const { add, list, query, update, remove } = teamController

router.get("/team", list)

router.post("/team", add)

router.get("/team/:id", query)

router.put("/team/:id", update)

router.delete("/team/:id", remove)

module.exports = router
