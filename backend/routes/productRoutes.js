import express from 'express';
import { createProduct, createProductReview, deleteProduct, getAllProducts, getProduct, updateProduct,getTopProduct } from '../controllers/productControllers.js';
import { admin, verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router()

router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.get("/products/top", getTopProduct)
router.post("/product", verifyToken, admin, createProduct)
router.put("/product/:id", verifyToken, admin, updateProduct)
router.delete("/product/:id", verifyToken, admin, deleteProduct)
router.post("/product/:id/reviews", verifyToken, createProductReview)

export default router;