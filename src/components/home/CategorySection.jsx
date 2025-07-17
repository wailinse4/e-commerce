import CategoryCard from '../home/CategoryCard';

const CategorySection = ({ categories }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900">Shop by Category</h2>
        <p className="text-xl text-gray-700 mt-2">
          Discover our curated collections designed for every need
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            index={index} 
          />
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
