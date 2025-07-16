import express from "express"

import { signup, login, checkAuth, logout, verifyEmail } from "../controllers/authController.js"

import authenticate from "../middleware/authenticate.js"

const router = express.Router() 

router.post("/signup", signup)
router.post("/login", login)
router.get("/check-auth", authenticate, checkAuth)
router.post("/logout", logout)
router.post("/verify-email", verifyEmail)

export default router 