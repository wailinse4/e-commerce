import Coupon from "../models/Coupon.js"

export const getCoupon = async (req, res) => {
    try {   
        const { userId } = req.user

        const coupon = await Coupon.findOne({ userId: userId, isActive: true })
        return res.json(coupon) // edit later 
    }
    catch(error) {
        console.error(error) 
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const validateCoupon = async (req, res) => {
    try {   
        const { userId } = req.user
        const { code } = req.body 

        const coupon = await Coupon.findOne({ code: code, userId: userId, isActive: true })
        if(!coupon) {
            return res.status(404).json({ success: false, message: "Coupon not found" })
        }

        if(coupon.expirationDate < newDate()) {
            return res.status(400).json({ success: false, message: "Coupon is expired" })
        }

        if(!coupon.isActive) {
            return res.status(400).json({ success: false, message: "Coupon is not active" })
        }

        res.status(200).json({ success: true,  code })
    }
    catch(error) {
        console.error(error) 
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

