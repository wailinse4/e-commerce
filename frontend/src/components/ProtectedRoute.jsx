import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user, isCheckingAuth } = useAuth()

    const isAuthenticated = !!user 

    if (isCheckingAuth) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        )
    }

    if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (isAuthenticated && !user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}


    return children
}

export default ProtectedRoute
