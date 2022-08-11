import { Router } from "express";

import technologyController from "../controllers/technology.controller";
import { Auth, isAdmin, isModerator } from "../middlewares/auth.middlewares";

const router = Router();
const { add, list, query, update, remove } = technologyController;

router.post("/tech", Auth, isModerator, add);

router.get("/tech", list);

router.get("/tech/:id", query);

router.put("/tech/:id", Auth, update);

router.delete("/tech/:id", Auth, remove);

module.exports = router;
