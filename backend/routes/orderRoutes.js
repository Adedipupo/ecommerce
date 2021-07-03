import express from "express";
import {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { admin, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addOrderItems);
router.get("/myorders", verifyToken, getMyOrders);
router.get("/", verifyToken, admin, getAllOrders);
router.get("/:id", verifyToken, getOrderById);
router.put("/:id/pay", verifyToken, updateOrderToPaid);
router.put("/:id/deliver", verifyToken, admin, updateOrderToDelivered);

export default router;
