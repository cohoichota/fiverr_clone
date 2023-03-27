import express, { Router } from "express";
import { createMessage, getMessages } from "../controllers/message.controller";
import { verifyToken } from "../middleware/jwt";

const router: Router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
