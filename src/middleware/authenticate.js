import jwt from "jsonwebtoken"

const authenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies       
        if(!token) {
            return res.status(401).json({ success: false, message: "Unauthorized -- no token provided" })
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized -- invalid or expired token" })
        }

        req.user = decoded
        next() 
    }
    catch(error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export default authenticate