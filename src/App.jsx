import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

import HomePage from "./pages/HomePage"
import ProductListingPage from "./pages/ProductListingPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
// import CategoryPage from "./pages/CategoryPage"
import SearchPage from "./pages/SearchPage"
import CartPage from "./pages/CartPage"

import AdminPage from "./pages/AdminPage"

import PurchaseSuccessPage from "./pages/PurchaseSuccessPage"
import PurchaseCancelPage from "./pages/PurchaseCancelPage"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <ScrollToTop />      
      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          {/* <Route path="/category/:category" element={<CategoryPage />} /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
          
          <Route path="/admin" element={<AdminPage />} />
          
          <Route path="/purchase-success" element={<PurchaseSuccessPage />} />
          <Route path="/purchase-cancel" element={<PurchaseCancelPage />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
