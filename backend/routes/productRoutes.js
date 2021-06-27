import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productControllers.js';
import { admin, verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router()

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.post("/product", verifyToken, admin, createProduct)
router.put("/product/:id", verifyToken, admin, updateProduct)
router.delete("/product/:id", verifyToken, admin, deleteProduct)

export default router;