import { signupService, loginService, checkAuthService, verifyEmailService, resendVerificationEmailService, forgotPasswordService } from "../services/authService.js"

import generateToken from "../utils/generateToken.js"
import setCookie from "../utils/setCookie.js"

import crypto from "crypto"

export const signup = async (req, res, next) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body
        const user = await signupService({ fullName, email, password, confirmPassword })
        const token = generateToken(user)
        setCookie(res, token)
        
        return res.status(201).json({ success: true, message: "Signup successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 

            verificationCode: user.verificationCode, 
            verificationCodeExpiresAt: user.verificationCodeExpiresAt, 
            isVerified: user.isVerified, 
        }})
    }
    catch(error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await loginService({ email, password })
        const token = generateToken(user)
        setCookie(res, token)
    
        return res.status(200).json({ success: true, message: "Login successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
            isVerified: user.isVerified
        }})
    }
    catch(error) {
        next(error)
    }
}

export const checkAuth = async (req, res, next) => {
    try {
        const { userId } = req.user 
        const user = await checkAuthService(userId)

        res.status(200).json({ success: true, message: "Authentication successful", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email,
            isVerified: user.isVerified
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

export const verifyEmail = async (req, res, next) => {
    try {
        const { verificationCode } = req.body
        const user = await verifyEmailService(verificationCode)

        res.status(200).json({ success: true, message: "Email verified successfully", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
            
            verificationCode: user.verificationCode, 
            verificationCodeExpiresAt: user.verificationCodeExpiresAt, 
            isVerified: user.isVerified, 
        }})
    }   
    catch(error) {
        next(error)
    }
}

export const resendVerificationEmail = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await resendVerificationEmailService(email)

        res.status(200).json({ success: true, message: "Verification email resent successfully", data: {
            userId: user.id, 
            fullName: user.fullName, 
            email: user.email, 
            
            verificationCode: user.verificationCode, 
            verificationCodeExpiresAt: user.verificationCodeExpiresAt, 
            isVerified: user.isVerified, 
        }})
    }   
    catch(error) {
        next(error)
    }
}


export const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body 
        await forgotPasswordService(email)

        res.status(200).json({ success: true, message: "Password reset link sent to your email" })
    }
    catch(error) {
        next(error)
    }
}