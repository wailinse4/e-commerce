import Coupon from "../models/Coupon.js"

import stripe from "../config/stripe.js"

export const createCheckoutSession = async (req, res) => {
    try {
        const { products, couponCode } = req.body 
        const { userId } = req.user 

        // Check if products is an array 
        if(!Array.isArray(products)) {
            return res.status(400).json({ success: false, message: "Invalid products array" })
        }

        if(products.length == 0) {
            return res.status(400).json({ success: false, message: "Empty products array" })
        }

        let totalAmount = 0 

        // lineItems is just a fancy name for products in stripe 
        const lineItems = products.map(product => {
            const amountInCents = Math.round(product.price * 100) // Stripe wants you to send amount in cents 
            totalAmount += amountInCents * product.quantity 

            // Stripe wants you to return object in this format for each item -- this is all shown in the stripe checkout page 
            return {
                price_data: {
                    currency: "usd", 
                    product_data: {
                        name: product.name, 
                        images: [product.image], // Stripe wants you to send in array 

                    }, 
                    unit_amount: amountInCents
                }, 
                quantity: product.quantity
            }
        })



        let coupon = null 
        if(couponCode) {
            coupon = await Coupon.findOne({ code: couponCode, userId: userId, isActive: true })

            if(coupon) {
                totalAmount -= Math.round(totalAmount * coupon.discountPercentage / 100)
            }
        }

        // Create session 
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"], 
            line_items: lineItems, 
            mode: "payment", // one-time payment NOT subscription
            success_url: `http://localhost:5173/purchase-success?session_id={CHECKOUT_SESSION_ID}`, 
            cancel_url: `http://localhost:5173/purchase_cancel`, 
            discounts: coupon ? 
            [
                {
                    coupon: await createStripeCoupon(coupon.discountPercentage)
                }
            ]
            : [], // Return empty array if no coupon 
            metadata: {
                userId: userId.toString(), 
                couponCode: couponCode || "", 
            }

        })

        if(totalAmount >= 2000) { 
            await createNewCoupon(userId) 
        }
        res.status(200).json({ success: true, message: "Success", data: {
            id:session.id, 
            totalAmount: totalAmount / 100
        }})

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










// Helper Function to create coupon 
const createStripeCoupon = async (discountPercentage) => {
    const coupon = await stripe.coupons.create({
        percent_off: discountPercentage, 
        duration: "once", 
    })
    return coupon.id 
}

// Helper Function to create new coupin and add to database 
const createNewCoupon = async (userId) => {
    const coupon = await Coupon.create({ code: "GIFT" + Math.random().toString(36).substring(2,8).toUpperCase(), discountPercentage: 10, expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), userId: userId}) // 30 days from now 
    await coupon.save() 

    return coupon 
}




