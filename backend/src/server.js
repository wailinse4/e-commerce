import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"

import connectDB from "./config/db.js"

dotenv.config()

const app = express() 

app.get("/", (req,res) => res.send("Hello, World!"))

app.use(helmet())
app.use(morgan("dev"))
app.use(cors())

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use(cookieParser())

await connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`))