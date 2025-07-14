import mongoose from "mongoose" 

const productSchema = new mongoose.Schema({
		name: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true },
		price: { type: Number, required: true, min: 0 }, 
        image: { type: String, required: true },
		category: { type: String, required: true },
		isFeatured: { type: Boolean, default: false }
}, { timestamps: true }) 

const Product = new mongoose.model("Product", productSchema) 
export default Product 

