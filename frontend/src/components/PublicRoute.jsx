import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PublicRoute = ({ children }) => {
	const { user, isCheckingAuth } = useAuth()

	const isAuthenticated = !!user

	if (isCheckingAuth) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
			</div>
		)
	}

	if (isAuthenticated && user.isVerified) {
		return <Navigate to="/" replace />
	}

	return children
}

export default PublicRoute
