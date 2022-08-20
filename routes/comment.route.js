import { Router } from "express";

import commentController from "../controllers/comment.controller";

const router = Router();

const { addComment, query, update, remove, likeComment } = commentController;

router.post("/comment", addComment);

router.get("/comment/:id", query);

router.put("/comment/:id", update);

router.delete("/comment/:id", remove);

router.patch("/comment/:id", likeComment);

module.exports = router;
