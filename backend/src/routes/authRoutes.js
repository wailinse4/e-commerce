import express from "express"

import { signup, login, checkAuth } from "../controllers/authController.js"

import authenticate from "../middleware/authenticate.js"

const router = express.Router() 

router.post("/signup", signup)
router.post("/login", login)
router.get("/check-auth", authenticate, checkAuth)

export default router 