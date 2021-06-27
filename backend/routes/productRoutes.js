import express from 'express';
import { deleteProduct, getAllProducts, getProduct } from '../controllers/productControllers.js';
import { admin, verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router()

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.delete("/product/:id", verifyToken, admin, deleteProduct)

export default router;