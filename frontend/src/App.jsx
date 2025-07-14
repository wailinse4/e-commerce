import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import SignupPage from "./pages/SignupPage"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="relative z-50 pt-20">
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  )
}

export default App