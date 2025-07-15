import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Navbar from "./components/layout/Navbar"

import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"

import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  )
}

export default App