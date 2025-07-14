import express from "express"

import { getProducts, getProduct, getFeaturedProducts, getRelatedProducts, getNewArrivals, updateProduct, deleteProduct, createProduct, getProductsByCategory, toggleFeaturedProduct } from "../controllers/productController.js"

const router = express.Router()


router.get("/", getProducts)
router.get("/featured", getFeaturedProducts) 
router.get("/new-arrivals", getNewArrivals)
router.post("/", createProduct)

router.get("/:productId", getProduct)
router.get("/:productId/related", getRelatedProducts)
router.put("/:productId", updateProduct)
router.delete("/:productId", deleteProduct)
router.get("/category/:categoryName", getProductsByCategory)
router.patch("/:productId/toggle-featured-product", toggleFeaturedProduct)

export default router
