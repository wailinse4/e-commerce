import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PublicRoute = ({ children, redirectPath = '/' }) => {
    const { user, isCheckingAuth } = useAuth()

    if (isCheckingAuth) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
    }

    if (user) {
        return <Navigate to={redirectPath} replace />
    }

    return children
}

export default PublicRoute
