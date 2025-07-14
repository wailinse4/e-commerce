import CategoryCard from '../home/CategoryCard';

const CategorySection = ({ categories }) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-xl text-gray-700">
          Browse the latest in innovation, performance, and design
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
