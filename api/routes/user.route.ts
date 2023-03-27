import express, { Router } from "express";
import { deleteUser, getUser } from "../controllers/user.controller";

const router: Router = express.Router();

router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;
