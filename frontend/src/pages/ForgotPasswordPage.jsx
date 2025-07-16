import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-hot-toast"

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("")
	const [isSubmitted, setIsSubmitted] = useState(false)
	const { forgotPassword, isProcessingForgotPassword } = useAuth()

	const handleSubmit = async e => {
		e.preventDefault()

		if (!email) {
			toast.error("Email is required")
			return
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Please enter a valid email address")
			return
		}

		try {
			await forgotPassword(email)
			setIsSubmitted(true)
		} catch (error) {
			console.error(error)
			toast.error(error.response?.data?.message || "Failed to send reset email")
		}
	}

	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="h-full flex items-center justify-center bg-gray-50 px-4 py-8">
				<div className="w-full max-w-md my-auto">
					<motion.div className="bg-white rounded-3xl shadow-lg p-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<div className="text-center mb-8">
							<motion.h2 className="text-2xl font-semibold text-gray-900" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
								Reset your password
							</motion.h2>
							<motion.p className="mt-2 text-sm text-gray-600" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
								Enter your email and we'll send you a link to reset your password.
							</motion.p>
						</div>

						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
							{!isSubmitted ? (
								<>
									<form onSubmit={handleSubmit} className="space-y-6">
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-700">
												Email
											</label>
											<div className="mt-1 relative">
												<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
													<Mail className="h-5 w-5 text-gray-400" />
												</div>
												<input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-colors duration-200" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} disabled={isProcessingForgotPassword} />
											</div>
										</div>

										<motion.div whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
											<button type="submit" disabled={isProcessingForgotPassword} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
												{isProcessingForgotPassword ? (
													<>
														<LoadingSpinner size="md" color="white" className="-ml-1 mr-2" />
														Sending...
													</>
												) : (
													"Send Reset Link"
												)}
											</button>
										</motion.div>
									</form>
								</>
							) : (
								<motion.div className="text-center py-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
									<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
										<CheckCircle className="h-6 w-6 text-green-600" />
									</div>
									<h3 className="mt-3 text-lg font-medium text-gray-900">Email Sent</h3>
									<p className="mt-2 text-sm text-gray-500">We've sent you an email with instructions to reset your password.</p>
								</motion.div>
							)}

							<div className="mt-8">
								<div className="relative">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t border-gray-200"></div>
									</div>
									<div className="relative flex justify-center text-sm">
										<motion.span className="px-2 bg-white text-gray-500" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
											Remember your password?
										</motion.span>
									</div>
								</div>

								<motion.div className="mt-6 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
									<Link to="/login" className="font-medium text-black hover:text-gray-800 inline-flex items-center text-sm">
										<ArrowLeft className="mr-1 h-4 w-4" />
										Back to login
									</Link>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPasswordPage
