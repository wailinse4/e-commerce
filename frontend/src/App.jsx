import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthContext.jsx"

import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import LoadingSpinner from "./components/ui/LoadingSpinner"

import Navbar from "./components/layout/Navbar"

import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"

import HomePage from "./pages/HomePage"

function App() {
	const { user, isCheckingAuth } = useAuth()

	if (isCheckingAuth && !user) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<LoadingSpinner size="lg" />
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
			<div className="relative z-50 pt-20">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<PublicRoute>
								<HomePage />
							</PublicRoute>
						}
					/>

					<Route
						path="/signup"
						element={
							<PublicRoute>
								<SignupPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/verify-email"
						element={
							<PublicRoute>
								<EmailVerificationPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/forgot-password"
						element={
							<PublicRoute>
								<ForgotPasswordPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/reset-password/:resetPasswordToken"
						element={
							<PublicRoute>
								<ResetPasswordPage />
							</PublicRoute>
						}
					/>
				</Routes>
			</div>
			<Toaster />
		</div>
	)
}

export default App
