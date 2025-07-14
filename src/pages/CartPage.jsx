import { motion } from "framer-motion"
import CartItem from "../components/cart/CartItem"
import EmptyCart from "../components/cart/EmptyCart"
import OrderSummary from "../components/cart/OrderSummary"
import GiftCouponCard from "../components/cart/GiftCouponCard"
import PeopleAlsoBoughtSection from "../components/cart/PeopleAlsoBoughtSection"
import mockCartItems from "../data/mockCartItems"

const CartPage = () => {
  return (
    <div className="py-8 md:py-16 bg-gray-50 text-gray-900 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 bg-white p-6 rounded-xl shadow-sm">
          <motion.div
            className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mockCartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="space-y-6">
                {mockCartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </div>
            )}

          </motion.div>

          <motion.div
            className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <OrderSummary />
            <GiftCouponCard />
          </motion.div>
        </div>
        
        {/* People Also Bought Section */}
        <div className="mt-12">
          <PeopleAlsoBoughtSection />
        </div>
      </div>
    </div>
  )
}
export default CartPage


