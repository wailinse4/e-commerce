import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Lock, ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-hot-toast"

const ResetPasswordPage = () => {
	const { resetPasswordToken } = useParams()
	const { resetPassword, isProcessingResetPassword } = useAuth()

	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()

		if (!password) {
			toast.error("Password is required")
			return
		}

		if (password.length < 6) {
			toast.error("Password must be at least 6 characters")
			return
		}

		if (password !== confirmPassword) {
			toast.error("Passwords do not match")
			return
		}

		try {
			await resetPassword(resetPasswordToken, password)
			setIsSubmitted(true)
			toast.success("Password has been reset successfully!")
		} catch (error) {
			console.error("Reset password error:", error)
			toast.error(error.response?.data?.message || "Failed to reset password")
		}
	}
	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="h-full flex items-center justify-center bg-gray-50 px-4 py-8">
				<div className="w-full max-w-md my-auto">
					<motion.div className="bg-white rounded-3xl shadow-lg p-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						{!isSubmitted && (
							<Link to="/login" className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-6 transition-colors duration-200">
								<ArrowLeft className="h-4 w-4 mr-1" />
								Back to login
							</Link>
						)}
						<div className="text-center mb-8">
							<motion.div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
								<Lock className="h-6 w-6 text-gray-900" />
							</motion.div>
							<motion.h2 className="text-2xl font-semibold text-gray-900" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
								Reset your password
							</motion.h2>
							<motion.p className="mt-2 text-sm text-gray-600" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
								Create a new password for your account
							</motion.p>
						</div>

						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
							{!isSubmitted ? (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="space-y-4">
										<div>
											<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
												New Password
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
													<Lock className="h-5 w-5 text-gray-400" />
												</div>
												<input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-colors duration-200" placeholder="Enter new password" disabled={isProcessingResetPassword} />
											</div>
										</div>

										<div>
											<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
												Confirm Password
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
													<CheckCircle className="h-5 w-5 text-gray-400" />
												</div>
												<input id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-colors duration-200" placeholder="Confirm new password" disabled={isProcessingResetPassword} />
											</div>
										</div>
									</div>

									<motion.div whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
										<button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200">
											{isProcessingResetPassword ? (
												<>
													<Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
													Resetting...
												</>
											) : (
												"Reset Password"
											)}
										</button>
									</motion.div>
								</form>
							) : (
								<motion.div className="text-center py-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
									<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
										<CheckCircle className="h-6 w-6 text-green-600" />
									</div>
									<h3 className="mt-4 text-lg font-medium text-gray-900">Password Reset Successful</h3>
									<p className="mt-2 text-sm text-gray-500">Your password has been updated successfully. You can now log in with your new password.</p>
									<motion.div className="mt-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
										<Link to="/login" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200">
											Continue to Login
											<ArrowLeft className="h-4 w-4 ml-2 transform rotate-180" />
										</Link>
									</motion.div>
								</motion.div>
							)}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default ResetPasswordPage
