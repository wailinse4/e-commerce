import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true }, 
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true, minlength: 6 }, 

    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, 
            quantity: { type: Number, default: 1, min: 1 }
            
        }
    ], // Refactor later to have cartItem schema and cart 

    role: { type: String, enum: ["Customer", "Admin"], default: "Customer" }
    

}, { timestamps: true })

const User = new mongoose.model("User", userSchema)
export default User



