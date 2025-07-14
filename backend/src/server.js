import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"

import connectDB from "./config/db.js"

dotenv.config()

const app = express()

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`))