import express from "express"

import { createCheckoutSession } from "../controllers/paymentController.js"

import authenticate from "../middleware/authenticate.js"

const router = express.Router()

router.post("/create-checkout-session", authenticate, createCheckoutSession)
// router.post("/checkout-success", authenticate, checkoutSuccess)

export default router