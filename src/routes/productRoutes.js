import express from "express"

import authenticate from "../middleware/authenticate.js"

import { getAllProducts, getFeaturedProducts, createProduct, deleteProduct, getRecommendedProducts, getProductsByCategory, toggleFeaturedProduct } from "../controllers/productController.js"

const router = express.Router() 

router.get("/", authenticate, getAllProducts)
router.get("/featured", authenticate, getFeaturedProducts)
router.get("/recommended", getRecommendedProducts) // Tutorial does not use authenticate here -- not same as related -- Tutorial returns random x number of items
router.get("/category/:category", getProductsByCategory)
router.post("/", authenticate, createProduct)
router.delete("/:productId", authenticate, deleteProduct)
router.patch("/:productId", authenticate, toggleFeaturedProduct)

export default router