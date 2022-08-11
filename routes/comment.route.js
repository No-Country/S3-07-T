import { Router } from "express";

import commentController from "../controllers/comment.controller";

const router = Router();

const { add, list, query, update, remove } = commentController;

router.get("/comment", list);

router.post("/comment", add);

router.get("/comment/:id", query);

router.put("/comment/:id", update);

router.delete("/comment/:id", remove);

module.exports = router;
