import express from "express"

import authenticate from "../middleware/authenticate.js"

import { signup, login, logout, checkAuth } from "../controllers/authController.js"

const router = express.Router() 

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/check-auth", authenticate, checkAuth)

export default router