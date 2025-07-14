import { motion } from 'framer-motion';
import Carousel from '../Carousel';
import ProductCard from '../common/ProductCard';

const FeaturedSection = ({ products }) => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <Carousel 
        title="Featured"
        description="Discover our handpicked selection of premium products"
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

export default FeaturedSection;
