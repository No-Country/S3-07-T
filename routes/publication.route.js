import { Router } from "express";
import publicationController from "../controllers/publication.controller";

const router = Router();
const { add, list, query, update, remove, likePublication } =
  publicationController;

router.post("/publication", add);

router.get("/publication", list);

router.get("/publication/:id", query);

router.put("/publication/:id", update);

router.delete("/publication/:id", remove);

router.patch("/publication/:id", likePublication);

module.exports = router;
