import { motion } from 'framer-motion';

const ProductImage = ({ image, name }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-96 md:h-[600px] overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default ProductImage;
