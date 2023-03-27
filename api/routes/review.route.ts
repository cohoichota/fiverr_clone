import express, { Router } from "express";
import { createReview, deleteReview, getReviews } from "../controllers/review.controller";
import { verifyToken } from "../middleware/jwt";

const router: Router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

export default router;
