import { Router } from "express";

import technologyController from "../controllers/technology.controller";
import Auth from "../middlewares/auth.middlewares";

const router = Router();
const { add, list, query, update, remove } = technologyController;

router.post("/tech", Auth, add);

router.get("/tech", list);

router.get("/tech/:id", query);

router.put("/tech/:id", Auth, update);

router.delete("/tech/:id", Auth, remove);

module.exports = router;
