import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const OrderSummary = () => {
  return (
    <motion.div
      className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-semibold text-gray-900">Order summary</p>

      <div className="space-y-4">
        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base text-gray-600">Original price</dt>
          <dd className="text-base font-medium text-gray-900">$99.99</dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base text-gray-600">Savings</dt>
          <dd className="text-base font-medium text-gray-700">-$20.00</dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="text-base text-gray-600">Coupon (SAVE20)</dt>
          <dd className="text-base font-medium text-gray-700">-20%</dd>
        </dl>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-400 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-gray-700">$79.99</dd>
        </dl>
      </div>

      <motion.button
        className="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Proceed to Checkout
      </motion.button>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm text-gray-500">or</span>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline hover:text-gray-900 hover:no-underline transition"
        >
          Continue Shopping <MoveRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
