import { Search } from "lucide-react"
import { motion } from "framer-motion"

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 sm:px-12 lg:px-20 py-12 flex flex-col items-center">
      
      {/* Search Bar at the top */}
      <motion.div
        className="w-full max-w-3xl mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <input
            type="search"
            placeholder="Search for products, categories, brands..."
            className="w-full py-4 pl-14 pr-6 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-lg"
          />
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 pointer-events-none" />
        </div>
      </motion.div>

        {/* Title below */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Search Products
        </motion.h1>
      </div>
  )
}

export default SearchPage
