import { useState } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react"
import { toast } from "react-hot-toast"
import { useAuth } from "../context/AuthContext"

const LoginPage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const { login, isLoggingIn } = useAuth()
	const navigate = useNavigate()

	const handleEmailChange = e => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = e => {
		setPassword(e.target.value)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!email.trim() || !password.trim()) {
			toast.error("All fields are required")
			return false
		}

		try {
			await login(email, password)
			toast.success("Login successful!")
			navigate("/")
		} catch (error) {
			toast.error("Login failed")
			console.error(error)
		}
	}

	return (
		<div className="fixed inset-0 overflow-hidden">
			<div className="h-full flex items-center justify-center bg-gray-50 px-4 py-8">
				<div className="w-full max-w-md my-auto">
					<motion.div className="bg-white rounded-3xl shadow-lg p-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
						<motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
							<h2 className="text-2xl font-extrabold text-black mb-2">Welcome Back</h2>
							<p className="text-black/80">Sign in to your account to continue</p>
						</motion.div>
						<motion.form className="space-y-6 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email address
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</div>
									<input id="email" type="email" required value={email} onChange={handleEmailChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="you@example.com" />
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
									<input id="password" type="password" required value={password} onChange={handlePasswordChange} className="block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm" placeholder="••••••••" />
								</div>
								<div className="mt-2 text-right">
									<Link to="/forgot-password" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
										Forgot password?
									</Link>
								</div>
							</div>

							<button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-150 ease-in-out hover:scale-[1.02]">
								<LogIn className={`mr-2 h-5 w-5 ${isLoggingIn ? "opacity-0" : "opacity-100"}`} aria-hidden="true" />
								{isLoggingIn ? "Logging in..." : "Login"}
							</button>
						</motion.form>

						<p className="mt-8 text-center text-sm text-gray-600">
							Not a member?{" "}
							<Link to="/signup" className="font-medium text-black hover:text-gray-700">
								Sign up now <ArrowRight className="inline h-4 w-4" />
							</Link>
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
