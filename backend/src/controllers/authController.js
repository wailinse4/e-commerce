import bcrypt from "bcrypt"

import User from "../models/User.js"

import generateToken from "../utils/generateToken.js"
import setCookie from "../utils/setCookie.js"

export const signup = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body 

        if(!fullName || !email || !password || !confirmPassword) {
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