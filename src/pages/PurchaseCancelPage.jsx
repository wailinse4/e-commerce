import { XCircle, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const PurchaseCancelPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[#F5F5F7] px-4">
      <motion.div
        className="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <XCircle className="text-red-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-4">
          Purchase Cancelled
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Your order has been cancelled. No charges have been made.
        </p>

        <div className="bg-gray-100 rounded-xl p-5 mb-8">
          <p className="text-sm text-gray-500 text-center">
            If you encountered any issues during the checkout process, please don&apos;t hesitate to
            contact our support team.
          </p>
        </div>

        <Link
          to="/"
          className="w-full block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-full text-center transition-colors duration-300 flex items-center justify-center"
        >
          <ArrowLeft className="mr-3" size={20} />
          Return to Shop
        </Link>
      </motion.div>
    </div>
  )
}

export default PurchaseCancelPage
