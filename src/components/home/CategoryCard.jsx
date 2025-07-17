import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/category/${category.slug}`} className="block h-full">
        <div className="relative bg-gray-100 rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-200 h-full flex flex-col">
          <div className="relative flex-1 flex items-center justify-center mb-6">
            <div className="w-3/4 h-3/4 relative">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="mt-auto text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              {category.name}
            </h3>
            <div className="flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors">
              <span className="text-sm font-medium">Shop now</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
