 import express from "express";
import { addOrderItems, getAllOrders, getMyOrders, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";


 const router = express.Router();


 router.post("/",verifyToken ,addOrderItems);
 router.get("/myorders", verifyToken, getMyOrders)
 router.get("/", verifyToken, getAllOrders);
router.get("/:id", verifyToken, getOrderById);
router.put("/:id/pay", verifyToken, updateOrderToPaid);

 export default router;