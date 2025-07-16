import bcrypt from "bcrypt"
import User from "../models/User.js"

export const signupService = async ({ fullName, email, password, confirmPassword }) => {
    if (!fullName || !email || !password || !confirmPassword) {
        const error = new Error("All fields are required")
        error.statusCode = 400 
        throw error
    }
    
    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
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

    if (password.length < 6) {
        const error = new Error("Password must be at least 6 characters")
        error.statusCode = 400 
        throw error
    }

    if (password !== confirmPassword) {
        const error = new Error("Passwords do not match")
        error.statusCode = 400 
        throw error
    }
    
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({ 
        fullName, 
        email, 
        password: hashedPassword 
    })
    
    return user
}

export const loginService = async ({ email, password }) => {
    if (!email || !password) {
        const error = new Error("All fields are required")
        error.statusCode = 400 
        throw error
    }

    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error("Invalid credentials")
        error.statusCode = 400 
        throw error
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        const error = new Error("Invalid credentials")
        error.statusCode = 400 
        throw error
    }

    return user
}

export const checkAuthService = async (userId) => {
    const user = await User.findById(userId)
    if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404 
        throw error
    }
    return user
}