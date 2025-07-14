import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dgnp2u92j",
  api_key: process.env.CLOUDINARY_API_KEY || "411785724418667",
  api_secret: process.env.CLOUDINARY_API_SECRET || "lwFy7YV5WLnkbm8mQk",
})

export default cloudinary