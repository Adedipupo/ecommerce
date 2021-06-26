import express from "express";
import { createUser, getUsers, getUserProfile, loginUser, updateUserProfile } from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/',verifyToken,getUsers)
router.post("/register", createUser)
router.post('/login', loginUser)
router.get('/profile', verifyToken, getUserProfile)
router.put('/profile',verifyToken, updateUserProfile)

export default router;
