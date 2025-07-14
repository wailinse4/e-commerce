import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true }, 
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true, minlength: 6 }, 
}, { timestamps: true })

const User = new mongoose.model("User", userSchema)
export default User