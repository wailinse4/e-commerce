import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';



const ProductInfo = ({ product }) => {
  return (
    <motion.div 
      className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {product.name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl font-medium tracking-tight text-gray-900">
          ${product.price.toFixed(2)}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Category: {product.category}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">Description</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>

      <div className="mt-8">
        <div className="flex items-center">
          <span className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </span>
          <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
        </div>
      </div>

      <div className="mt-8">
        <button 
          type="button"
          className="w-full bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 hover:shadow-lg flex items-center justify-center"
        >
          <ShoppingCart className="inline-block h-5 w-5 mr-2" />
          Add to cart - ${product.price.toFixed(2)}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
