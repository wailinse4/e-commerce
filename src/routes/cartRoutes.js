import express from "express"

import authenticate from "../middleware/authenticate.js"

import { getCartItems, addToCart, removeFromCart, updateQuantity } from "../controllers/cartController.js"

const router = express.Router() 

router.get("/", authenticate, getCartItems)
router.post("/", authenticate, addToCart)
router.delete("/", authenticate, removeFromCart) 
router.patch("/:productId", authenticate, updateQuantity)


export default router