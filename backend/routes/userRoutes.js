import express from "express";
import { createUser, getUsers, getUserProfile, loginUser, updateUserProfile, deleteUser, getUser } from "../controllers/userController.js";
import { verifyToken,admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/:id',verifyToken,admin,getUser)
router.get('/',verifyToken,admin,getUsers)
router.post("/register", createUser)
router.post('/login', loginUser)
router.get('/profile', verifyToken, getUserProfile)
router.put('/profile', verifyToken, updateUserProfile)
router.delete('/delete/:id',verifyToken,admin,deleteUser)

export default router;
