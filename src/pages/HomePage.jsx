import mockProducts from "../data/mockProducts";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import FeaturedSection from "../components/home/FeaturedSection";
import NewArrivalsSection from "../components/home/NewArrivalsSection";

const HomePage = () => {
  // Get unique categories from products
  const categories = [...new Set(mockProducts.map(product => product.category))]
    .map(category => {
      const slug = category.toLowerCase().replace(/\s+/g, '-');
      return {
        id: slug,
        slug: slug,
        name: category,
        image: `https://picsum.photos/seed/category-${slug}/800/800`
      };
    });

  // Get featured products (isFeatured: true)
  const featuredProducts = mockProducts.filter(product => product.isFeatured);
  
  // Get newest products (first 4 by default or all if less than 4)
  const newArrivals = [...mockProducts].reverse().slice(0, 10);

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <HeroSection />
      <CategorySection categories={categories} />
      <FeaturedSection products={featuredProducts} />
      <NewArrivalsSection products={newArrivals} />
    </div>
  );
};

export default HomePage;
