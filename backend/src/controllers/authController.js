import bcrypt from "bcrypt"

import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"
import setCookie from "../utils/setCookie.js"

export const signup = async (req, res, next) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body 

        if(!fullName || !email || !password || !confirmPassword) {
            const error = new Error("All fields are required")
            error.statusCode = 400 
            throw error
        }
        
        const existingEmail = await User.findOne({ email })
        if(existingEmail) {
            const error = new Error("Email already exists")
            error.statusCode = 400 
            throw error        
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
		if (!emailRegex.test(email)) {
            const error = new Error("Invalid email address")
            error.statusCode = 400 
            throw error   		
        }

        if(password.length < 6) {
            const error = new Error("Password must be at least 6 characters")
            error.statusCode = 400 
            throw error
        }

        if(password !== confirmPassword) {
            const error = new Error("Passwords do not match")
            error.statusCode = 400 
            throw error
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
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body 

        if(!email || !password) {
            const error = new Error("All fields are required")
            error.statusCode = 400 
            throw error
        }

        const user = await User.findOne({ email })
        if(!user) {
            const error = new Error("Invalid credentials")
            error.statusCode = 400 
            throw error
        }
    
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            const error = new Error("Invalid credentials")
            error.statusCode = 400 
            throw error
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
        next(error)
    }
}

export const checkAuth = async (req, res, next) => {
    try {
        const { userId } = req.user 

        const user = await User.findById(userId)
        if(!user) {
            const error = new Error("User not found")
            error.statusCode = 404 
            throw error
        }

        res.status(200).json({ success: true, message: "Authentication successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
        }})
    }   
    catch(error) {
        next(error)
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "Strict",
            secure: (process.env.NODE_ENV || "development") !== "development",
            maxAge: 0, 
        })

        res.status(200).json({ success: true, message: "Logout successful" })
    }
    catch(error) {
        next(error)
    }
}