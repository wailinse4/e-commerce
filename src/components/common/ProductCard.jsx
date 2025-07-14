import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="block h-full">
      <motion.div 
        className="group relative bg-white rounded-xl overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-md transition-all duration-300"
        whileHover={{ y: -4 }}
      >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || '/placeholder-product.jpg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">{product.category}</span>
          <h3 className="text-base font-medium text-gray-900 mt-1 mb-1.5 hover:opacity-80 transition-opacity">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100">
          <span className="text-base font-semibold text-gray-900">${product.price?.toFixed(2)}</span>
          <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
            Add to Bag
          </button>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}