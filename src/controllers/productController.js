import Product from "../models/Product.js"

import cloudinary from "../config/cloudinary.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).lean()
        return res.status(200).json({ success: true, message: "Products fetched successfully", data: products })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }
}

export const getFeaturedProducts = async (req, res) => {
    try {
        const featuredProducts = await Product.find({ isFeatured: true }).lean() 
        return res.status(200).json({ success: true, message: "Featured products fetched successfully", data: featuredProducts })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body
        if(!name || !description || !price || !image || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }        

        const cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" })
     
        const product = await Product.create({ name, description, price, image: cloudinaryResponse.secure_url, category })
        return res.status(201).json({ success: true, message: "Product created successfully", data: product })
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } =  req.params 

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({ status: false, message: "Product not found" }) 
        }

        if(product.image) {
            const publicId = product.image.split("/").pop().split(".")[0]
            await cloudinary.uploader.destroy(`products/${publicId}`)
        } 

        await Product.findByIdAndDelete(productId)
        return res.json({ success: true, message: "Product deleted successfully" }) 
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }
}


export const getRecommendedProducts = async (req, res) => {
    try {
        const products = await Product.aggregate([
            { $sample: { size: 3}}, 
            { $project: { _id: 1, name: 1, description: 1, image: 1, price: 1 }}
        ])
        return res.json({ success: true, message: "Recommended products fetched successfully", data: products }) 

    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params

        const products = await Product.find({ category }).lean()
        return res.json({ success: true, message: "Products by category fetched successfully", data: products }) 

    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }  
} 

export const toggleFeaturedProduct = async (req, res) => {
    try {
        const { productId } = req.params

        const product = await Product.findById(productId)
        if(!product) { 
            return res.status(404).json({ success: false, message: "Product not found" })
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { isFeatured: !product.isFeatured },
            { new: true }
        );

        return res.json({ success: true, message: "Product toggled successfully", data: updatedProduct }) 

    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })   
    }  
}