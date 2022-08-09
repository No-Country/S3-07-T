import { Router } from "express";

import technologyController from "../controllers/technology.controller";

const router = Router();
const { add, list, query, update, remove } = technologyController;

router.post("/tech", add);

router.get("/tech", list);

router.get("/tech/:id", query);

router.put("/tech/:id", update);

router.delete("/tech/:id", remove);

module.exports = router;
