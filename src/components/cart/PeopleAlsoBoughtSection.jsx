import { motion } from 'framer-motion';
import mockProducts from '../../data/mockProducts';
import ProductCard from '../common/ProductCard';
import Carousel from '../Carousel';

const PeopleAlsoBoughtSection = () => {
  // Get random products for "People Also Bought"
  const getRandomProducts = (count = 10) => {
    const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(10);

  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="w-full">
        <div className="container mx-auto px-4">
        <Carousel
          title="People Also Bought"
          description="Explore what others are adding to their carts"
        >
          {randomProducts.map((product, index) => (
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
    </section>
  );
};

export default PeopleAlsoBoughtSection;
