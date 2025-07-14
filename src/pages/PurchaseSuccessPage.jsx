import { ArrowRight, CheckCircle, HandHeart } from "lucide-react"
import { Link } from "react-router-dom"
import Confetti from "react-confetti"
import { motion } from "framer-motion"

const PurchaseSuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] px-4">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 0 }}
        numberOfPieces={700}
        recycle={false}
      />

      <motion.div
        className="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-emerald-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-3">
          Purchase Successful!
        </h1>

        <p className="text-center text-gray-700 mb-1">
          Thank you for your order. We're processing it now.
        </p>
        <p className="text-center text-emerald-600 text-sm mb-8">
          Check your email for order details and updates.
        </p>

        <div className="bg-gray-100 rounded-xl p-5 mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Order number</span>
            <span className="text-sm font-semibold text-gray-900">#12345</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Estimated delivery</span>
            <span className="text-sm font-semibold text-gray-900">3-5 business days</span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full transition-transform duration-300 flex items-center justify-center hover:scale-105"
          >
            <HandHeart className="mr-3" size={20} />
            Thanks for trusting us!
          </button>

          <Link
            to="/"
            className="w-full block bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-full text-center transition-colors duration-300 flex items-center justify-center"
          >
            Continue Shopping
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default PurchaseSuccessPage
