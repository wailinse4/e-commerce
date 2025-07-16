import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthContext.jsx" 

import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

import Navbar from "./components/layout/Navbar"

import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"

import HomePage from "./pages/HomePage"



function App() {
  const { user, isCheckingAuth } = useAuth()

  if (isCheckingAuth && !user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

          <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/verify-email" element={<PublicRoute><EmailVerificationPage /></PublicRoute>} />
        </Routes>
      </div>
      <Toaster />
    </div>
  )
}

export default App