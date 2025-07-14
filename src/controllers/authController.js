import bcrypt from "bcrypt"

import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"
import setCookie from "../utils/setCookie.js"

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body 

        if(!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        
        const existingEmail = await User.findOne({ email })
        if(existingEmail) {
            return res.status(400).json({ success: false, message: "Email already exists" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
		if (!emailRegex.test(email)) {
			return res.status(400).json({ success: false, message: "Invalid email address" }) 
		}

        if(password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters" })
        }
        
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({ fullName, email, password: hashedPassword }) 

        const token = generateToken(user)
        setCookie(res, token)
        
        return res.status(201).json({ success: true, message: "Signup successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
        } })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body 

        if(!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
    
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" })
        }
    
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            return res.status(400).json({ success: false, message: "Invalid credentials" })
        }

        const token = generateToken(user)
        setCookie(res, token)
    
        return res.status(200).json({ success: true, message: "Login successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
        }})
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "Strict",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 0, 
        })

        res.status(200).json({ success: true, message: "Logout successful" })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const checkAuth = async (req, res) => {
    try {
        const { userId } = req.user 

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        res.status(200).json({ success: true, message: "Authentication successful", data: {
            id: user.id, 
            fullName: user.fullName, 
            email: user.email, 
        }})
    }   
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}
