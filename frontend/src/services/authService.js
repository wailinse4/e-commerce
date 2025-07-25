import axiosInstance from "../config/axiosInstance.js"

export const signupService = async (fullName, email, password, confirmPassword) => {
	const response = await axiosInstance.post("/auth/signup", { fullName, email, password, confirmPassword })
	return response
}

export const loginService = async (email, password) => {
	const response = await axiosInstance.post("/auth/login", { email, password })
	return response
}

export const checkAuthService = async () => {
	const response = await axiosInstance.get("/auth/check-auth")
	return response
}

export const logoutService = async () => {
	const response = await axiosInstance.post("/auth/logout")
	return response
}

export const verifyEmailService = async verificationCode => {
	const response = await axiosInstance.post("/auth/verify-email", { verificationCode })
	return response
}

export const resendVerificationEmailService = async email => {
	const response = await axiosInstance.post("/auth/resend-verification-email", { email })
	return response
}

export const forgotPasswordService = async email => {
	const response = await axiosInstance.post("/auth/forgot-password", { email })
	return response
}

export const resetPasswordService = async (resetPasswordToken, password) => {
	const response = await axiosInstance.post(`/auth/reset-password/${resetPasswordToken}`, { password })
	return response
}
