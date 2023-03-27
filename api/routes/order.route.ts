import express, { Router } from "express";
import { getOrders, intent, confirm } from "../controllers/order.controller";
import { verifyToken } from "../middleware/jwt";

const router: Router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;
