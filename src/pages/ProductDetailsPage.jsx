import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import RelatedProductsSection from "../components/product-details/RelatedProductsSection"
import mockProducts from "../data/mockProducts"
import ProductImage from "../components/product-details/ProductImage"
import ProductInfo from "../components/product-details/ProductInfo"

const ProductDetailsPage = () => {
  const { id } = useParams()
  
  // Find the product by ID in mock data
  const product = mockProducts.find(p => p._id === id) || mockProducts[0]
  
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 mb-12">
          {/* Back button */}
          <Link 
            to="/products" 
            className="flex items-center text-black/70 hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to products
          </Link>

          {/* Product grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Product Image */}
            <ProductImage image={product.image} name={product.name} />
            
            {/* Product Info */}
            <ProductInfo product={product} />
          </div>
        </div>
        
        {/* Related Products Section */}
        <RelatedProductsSection />
      </div>
    </div>
  )
}

export default ProductDetailsPage