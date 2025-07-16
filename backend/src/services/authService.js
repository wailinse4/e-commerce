import bcrypt from "bcrypt"
import User from "../models/User.js"

import transporter from "../config/nodemailer.js"

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

    const verificationCode = Math.floor(10000 + Math.random() * 900000).toString()  
    const verificationCodeExpiresAt = Date.now() + 24 * 60 * 60 * 1000  
    
    const user = await User.create({ 
        fullName, 
        email, 
        password: hashedPassword, 

        verificationCode, 
        verificationCodeExpiresAt, 
    })

    await transporter.sendMail({
        to: user.email, 
        subject: "Email Verification Code",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Your Verification Code</h2>
                <p>Hello ${user.fullName || 'there'},</p>
                <p>Please use the following code to verify your email address:</p>
                <h3 style="background: #f4f4f4; padding: 10px; display: inline-block; border-radius: 5px;">
                    ${verificationCode}
                </h3>
                <p>This code will expire in 1 hour.</p>
                <p>If you didn't request this code, please ignore this email.</p>
                <br/>
                <p>Best regards,<br/>The Team</p>
            </div>
        `
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