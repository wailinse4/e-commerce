
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: process.env.USER_PASS, 
        pass: process.env.EMAIL_PASS, 
    }
})

export default transporter