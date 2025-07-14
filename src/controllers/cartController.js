import User from "../models/User.js"

export const getCartItems = async (req, res) => {
    try {
        const { userId } = req.user
        
        const user = await User.findById(userId).populate('cartItems.product');
        if(!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        res.status(200).json({ 
            success: true, 
            message: "Cart items fetched successfully", 
            data: user.cartItems 
        });
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })  
    }
}

export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body 
        const { userId } = req.user 
        
        
        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const existingItem = user.cartItems.find(item => 
            item.product.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } 
        else {
            user.cartItems.push({ product: productId, quantity: 1 });
        }
        await user.save() 
        await user.populate("cartItems.product")
        
        res.status(201).json({ 
            success: true, 
            message: "Item added to cart",
            data: user.cartItems
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding to cart" });
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const { userId } = req.user;
        const { productId } = req.params;
        const { quantity } = req.body;

        // Input validation
        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        if (quantity === undefined || isNaN(quantity) || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Valid quantity (minimum 1) is required"
            });
        }

        // Find user and update cart item
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Find the cart item
        const cartItem = user.cartItems.find(item => 
            item.product && item.product.toString() === productId
        );

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Item not found in cart"
            });
        }

        // Update quantity
        cartItem.quantity = Number(quantity);
        
        // Save changes
        await user.save();
        await user.populate('cartItems.product');

        // Return updated cart
        res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            data: user.cartItems
        });

    } catch (error) {
        console.error("Error updating cart quantity:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update cart quantity",
            error: error.message
        });
    }
}


export const removeFromCart = async (req, res) => {
    try {
        const { userId } = req.user;
        const { productId } = req.body;

        // Input validation
        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Check if the item exists in the cart
        const initialLength = user.cartItems.length;
        user.cartItems = user.cartItems.filter(
            item => item.product.toString() !== productId
        );

        // If no items were removed
        if (initialLength === user.cartItems.length) {
            return res.status(404).json({
                success: false,
                message: "Item not found in cart"
            });
        }

        // Save the updated cart
        await user.save();
        await user.populate('cartItems.product');

        // Return the updated cart
        res.status(200).json({
            success: true,
            message: "Item removed from cart",
            data: user.cartItems
        });

    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({
            success: false,
            message: "Failed to remove item from cart",
            error: error.message
        });
    }
}
