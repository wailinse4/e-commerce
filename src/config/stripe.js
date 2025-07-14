import Stripe from "stripe"
import dotenv from "dotenv"

dotenv.config()

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY || "EwkfEbsj-lwFy7YV5WLnkbm8mQk")
export default stripeInstance