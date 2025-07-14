import stripe from "../config/stripe.js"

export const createCheckoutSession = async (req, res) => {
    try {
        const { products } = req.body 
        const { userId } = req.user 

        if(!Array.isArray(products)) {
            return res.status(400).json({ success: false, message: "Invalid products array" })
        }

        if(products.length == 0) {
            return res.status(400).json({ success: false, message: "Empty products array" })
        }

        // 1. Build line items and calculate total 
        let totalAmount = 0 
        const lineItems = products.map(product => { // lineItems is just a fancy name for products in stripe 
            const amountInCents = Math.round(product.price * 100) // Stripe wants you to send amount in cents 
            totalAmount += amountInCents * product.quantity 

            return {             // Stripe wants you to return object in this format for each item -- this is all shown in the stripe checkout page 
                price_data: {
                    currency: "usd", 
                    product_data: { name: product.name, images: [product.image] },  // Stripe wants you to send in array 
                    unit_amount: amountInCents
                }, 
                quantity: product.quantity
            }
        })

        // 2. Create session 
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], 
            line_items: lineItems, 
            mode: "payment", // one-time payment NOT subscription
            success_url: `http://localhost:5173/purchase-success?session_id={CHECKOUT_SESSION_ID}`, 
            cancel_url: `http://localhost:5173/purchase_cancel`, 
            metadata: { userId: userId.toString() }
        })
        res.status(200).json({ success: true, message: "Session created successfully", data: { id:session.id, totalAmount: totalAmount / 100}})
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" }) 
    }
}

// export const checkoutSuccess = async (req, res) => {
//     try {

//     }
//     catch(error) {
//         console.error(error)
//         return res.status(500).json({ success: false, message: "Internal server error" }) 
//     }
// }










