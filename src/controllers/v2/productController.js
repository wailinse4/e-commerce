import Product from "../models/Product.js"

import cloudinaryV2 from "../config/cloudinary.js"

export const getProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, sortBy, page = 1, limit = 10, search } = req.query
        
        // Build the filter object
        let filter = {}
        if (category) filter.category = category
        if (minPrice) filter.price = { $gte: minPrice }
        if (maxPrice) filter.price = { ...filter.price, $lte: maxPrice }
        
        // Search
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },  // Case-insensitive search for name
                { description: { $regex: search, $options: 'i' } }  // Case-insensitive search for description
            ]
        }

        // Build sorting object
        let sort = {}
        if (sortBy) {
            const [field, order] = sortBy.split(':') // Sort by field and order (ascending/descending)
            sort[field] = order === 'desc' ? -1 : 1
        }

        // Pagination
        const skip = (page - 1) * limit

        const products = await Product.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit))

        const totalProducts = await Product.countDocuments(filter)
        const totalPages = Math.ceil(totalProducts / limit)

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
            pagination: {
                totalProducts,
                totalPages,
                currentPage: page,
                perPage: limit
            }
        })
    }
    catch(error) {
        console.error("Error fetching products:", error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}


export const getProduct = async (req, res) => {
    try {
        const { productId } = req.params

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({ success: false, message: "Product not found"})
        }

        res.status(200).json({ success: true, message: "Product fetched successfully", data: {
            id: product._id, 
            name: product.name, 
            price: product.price,
            image: product.image, 
            category: product.category,  
            description: product.description, 
            stock: product.inStock
        }})
    }
    catch(error) {
        console.error("Error fetching product:", error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ isFeatured: true })

        if(products.length === 0) {
            return res.status(404).json({ success: false, message: "No featured products found" })
        }

        res.status(200).json({ success: true, message: "Products fetched successfully", data: products })

    }
    catch(error) {
        res.status(400).json({ success: false, message: "Products could not be found" })
        console.error("Products could not be found:", error)
    }
}

export const getRelatedProducts = async (req, res) => {
    try {
        const { productId } = req.params;

        // Find the product to get its category
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Find other products in the same category, excluding the current product
        const relatedProducts = await Product.find({
            category: product.category,
            _id: { $ne: productId } // Exclude the current product from the results
        });

        if (relatedProducts.length === 0) {
            return res.status(404).json({ success: false, message: "No related products found" });
        }

        res.status(200).json({
            success: true,
            message: "Related products fetched successfully",
            data: relatedProducts
        });

    } catch (error) {
        console.error("Error fetching related products:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const getNewArrivals = async (req, res) => {
    try {
        // You can adjust the number of new arrivals (e.g., 10) based on your requirements
        const limit = 3;

        // Find the most recent products based on the createdAt field
        const newArrivals = await Product.find({})
            .sort({ createdAt: -1 })  // Sort by createdAt in descending order
            .limit(limit);  // Limit to the latest 10 products

        if (newArrivals.length === 0) {
            return res.status(404).json({ success: false, message: "No new arrivals found" });
        }

        res.status(200).json({
            success: true,
            message: "New arrivals fetched successfully",
            data: newArrivals
        });
    } catch (error) {
        console.error("Error fetching new arrivals:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { name, price, image, category, description } = req.body
        const { productId } = req.params

        const product = await Product.findByIdAndUpdate(productId, { name, price, image, category, description }, { new: true })
        res.status(200).json({ success: true, message: "Product updated successfully", data: product })
    }
    catch(error) {
        res.status(400).json({ success: false, message: "Product could not be updated" })
        console.error("Product could not be updated:", error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params

        const product = await Product.findByIdAndDelete(productId)
        res.status(200).json({ success: true, message: "Product deleted successfully", data: product })

    }
    catch(error) {
        res.status(400).json({ success: false, message: "Product could not be deleted" })
        console.error("Product could not be deleted:", error)
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price, image, category, description, inStock, isFeatured } = req.body

        const cloudinaryResponse = await cloudinaryV2.uploader.upload(image, { folder: "products", transformation: [{ width: 300, height: 300 }, { effect: 'background_removal' }]})

        const product = await Product.create({ name, price, image: cloudinaryResponse.secure_url, category, description, inStock, isFeatured })

        res.status(201).json({ success: true, message: "Product created successfully", data: product })
    }
    catch(error) {
        res.status(400).json({ success: false, message: "Product could not be created" })
        console.error("Product could not be created:", error)
    }
}

export const getProductsByCategory = async (req, res) => {
    try {
        const { categoryName } = req.params

        const products = await Product.find({ category: categoryName })
        res.status(200).json({ success: true, message: "Products fetched successfully", data: products })
    }
    catch(error) {
        res.status(400).json({ success: false, message: "Products could not be found" })
        console.error("Products could not be found:", error)
    }
}

export const toggleFeaturedProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        // First, fetch the product to get the current isFeatured value
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Toggle the isFeatured value and update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { isFeatured: !product.isFeatured },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: `Product ${updatedProduct.isFeatured ? "marked as" : "unmarked as"} featured`,
            data: updatedProduct,
        });
    } catch (error) {
        console.error("Error toggling featured status:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
