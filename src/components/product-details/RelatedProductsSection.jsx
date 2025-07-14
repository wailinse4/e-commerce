import { motion } from 'framer-motion';
import mockProducts from "../../data/mockProducts";
import ProductCard from "../common/ProductCard";
import Carousel from "../Carousel";

const RelatedProductsSection = () => {
  // Get random related products (excluding the current product if needed)
  const getRandomProducts = () => {
    const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };
  
  const relatedProducts = getRandomProducts();
  
  return (
    <div className="py-12 bg-gray-50 mt-12 w-full">
      <div className="w-full">
        <div className="container mx-auto px-4">
        <Carousel 
          title="You May Also Like"
          description="Discover more products you might be interested in"
        >
          {relatedProducts.map((product, index) => (
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
      </div>
    </div>
  );
};

export default RelatedProductsSection;
