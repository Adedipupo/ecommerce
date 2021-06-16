 import express from "express";
import { addOrderItems } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";


 const router = express.Router();

 router.post("/",verifyToken ,addOrderItems);


 export default router;