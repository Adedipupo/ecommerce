import asyncHandler from "express-async-handler"
import UserModel from "../models/userModels.js"

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    const user = await UserModel.findOne({ email })
     
    if (user && (await user.matchPassword(password))) { 
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,
        })
    } else {
        res.status(401)
        throw new Error('Invalid username or password')
    }
})