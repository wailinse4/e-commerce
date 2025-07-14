import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
return (
<motion.div
className="relative rounded-xl overflow-hidden group"
whileHover={{ scale: 1.03 }} >
<Link to={`/category/${category.slug}`} className="block">
<div className="relative pb-[100%] bg-gray-100">
<img 
            src={category.image} 
            alt={category.name}
            className="absolute h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
<div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors duration-300 flex items-center justify-center">
<h3 className="text-white text-xl font-bold">{category.name}</h3>
</div>
</div>
</Link>
</motion.div>
);
};

export default CategoryCard;
