import { motion } from "framer-motion";

const GiftCouponCard = () => {
  return (
    <motion.div
      className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="voucher"
            className="mb-2 block text-sm font-medium text-gray-600"
          >
            Do you have a voucher or gift card?
          </label>
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black"
            placeholder="Enter code here"
          />
        </div>

        <motion.button
          type="button"
          className="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Code
        </motion.button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700">Applied Coupon</h3>
        <p className="mt-2 text-sm text-gray-600">SAVE20 - 20% off</p>
        <motion.button
          type="button"
          className="mt-2 flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Remove Coupon
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GiftCouponCard;
