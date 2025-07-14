import { motion } from 'framer-motion';

const ProductFilters = ({ categories }) => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer group">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-2 border-gray-300 text-black focus:ring-0 focus:ring-offset-0 focus:ring-black transition-colors duration-200
                    hover:border-gray-400
                    checked:bg-black checked:border-black"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilters;
