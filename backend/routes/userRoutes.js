import express from "express";
import { createUser, getUserProfile, loginUser, updateUserProfile } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auuthMiddleware.js";

const router = express.Router();

router.post("/register", createUser)
router.post('/login', loginUser)
router.get('/profile', verifyToken, getUserProfile)
router.put('/profile',verifyToken, updateUserProfile)

export default router;
