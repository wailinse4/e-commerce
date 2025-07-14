import { motion } from 'framer-motion';
import ProductCard from '../common/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <motion.div
      className="lg:col-span-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="flex">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;
