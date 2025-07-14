import { motion } from "framer-motion";
import mockProducts from "../data/mockProducts";
import ProductFilters from "../components/products/ProductFilters";
import ProductSort from "../components/products/ProductSort";
import ProductGrid from "../components/products/ProductGrid";

// Get unique categories from products
const allCategories = [...new Set(mockProducts.map(product => product.category))];

const ProductListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 lg:p-8">
      {/* Title */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <h1 className="text-2xl font-extrabold text-black mb-8">
          Product Listing
        </h1>
      </motion.div>

      {/* Main layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <ProductFilters categories={allCategories} />
            <ProductSort />
          </div>
          <ProductGrid products={mockProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
