import { motion } from 'framer-motion';
import Carousel from '../Carousel';
import ProductCard from '../common/ProductCard';

const NewArrivalsSection = ({ products }) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <Carousel 
        title="New Arrivals"
        description="Check out our latest products"
      >
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            className="flex-shrink-0 w-72 sm:w-80"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default NewArrivalsSection;
