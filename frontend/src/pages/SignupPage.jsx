import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Mail, Lock, User, ArrowRight } from "lucide-react"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import { toast } from "react-hot-toast"

import { useAuth } from "../context/AuthContext"

const SignUpPage = () => {
	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const handleFullNameChange = e => {
		setFullName(e.target.value)
	}

	const handleEmailChange = e => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = e => {
		setPassword(e.target.value)
	}

	const handleConfirmPasswordChange = e => {
		setConfirmPassword(e.target.value)
	}

	const { signup, isSigningUp } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()

		if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
			toast.error("All fields are required")
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
			await signup(fullName.trim(), email, password, confirmPassword)
			toast.success("Signup successful!")
			navigate("/")
		} catch (error) {
			toast.error("Signup failed")
			console.error(error)
		}
	}

	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="h-full flex items-center justify-center bg-gray-50 px-4 py-8">
				<div className="w-full max-w-md my-auto">
					<motion.div className="bg-white rounded-3xl shadow-lg p-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
						<motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
							<h2 className="text-2xl font-extrabold text-black mb-2">Create an Account</h2>
							<p className="text-black/80">Join us to get started</p>
						</motion.div>
						<motion.form className="space-y-6 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700">
									Full name
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<User className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</div>
									<input id="name" name="fullName" type="text" required value={fullName} onChange={handleFullNameChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="John Doe" />
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email address
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</div>
									<input id="email" name="email" type="email" required value={email} onChange={handleEmailChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="you@example.com" />
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</div>
									<input id="password" name="password" type="password" required value={password} onChange={handlePasswordChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="••••••••" />
								</div>
							</div>

							<div>
								<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
									Confirm Password
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</div>
									<input id="confirmPassword" name="confirmPassword" type="password" required value={confirmPassword} onChange={handleConfirmPasswordChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="••••••••" />
								</div>
							</div>

							<button
								type="submit"
								disabled={isSigningUp}
								className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
							>
								{isSigningUp ? (
									<>
										<LoadingSpinner size="sm" color="white" className="mr-2" />
										Creating account...
									</>
								) : (
									<>
										Create account
										<ArrowRight className="ml-2 h-4 w-4" />
									</>
								)}
							</button>
						</motion.form>

						<p className="mt-8 text-center text-sm text-gray-600">
							Already have an account?{" "}
							<Link to="/login" className="font-medium text-black hover:underline ml-1">
								Sign in
							</Link>
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage
