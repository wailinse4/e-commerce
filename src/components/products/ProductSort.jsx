import { motion } from 'framer-motion';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newArrivals', label: 'New Arrivals' },
  { value: 'priceLowToHigh', label: 'Price: Low to High' },
  { value: 'priceHighToLow', label: 'Price: High to Low' },
];

const ProductSort = () => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Sort By</h3>
      <div className="space-y-3">
        {sortOptions.map((option) => (
          <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
            <div className="flex items-center">
              <input
                type="radio"
                name="sortOption"
                className="h-4 w-4 rounded-full border-2 border-gray-300 text-black focus:ring-0 focus:ring-offset-0 focus:ring-black transition-colors duration-200
                  hover:border-gray-400
                  checked:border-black checked:border-4"
              />
            </div>
            <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductSort;
