import axiosInstance from "../config/axiosInstance.js"

import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext() 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const signup = async (fullName, email, password, confirmPassword) => {
        setIsSigningUp(true)
        try {
            const response = await axiosInstance.post("/auth/signup", { fullName, email, password, confirmPassword })
            setUser(response.data.data)
        } 
        catch (error) {
            setUser(null)
            console.error(error)
            throw error
        } 
        finally {
            setIsSigningUp(false)
        }
    }

    const login = async (email, password) => {
        setIsLoggingIn(true)
        try {
            const response = await axiosInstance.post("/auth/login", { email, password })
            setUser(response.data.data)
        } 
        catch (error) {
            setUser(null)
            console.error(error)
            throw error
        } 
        finally {
            setIsLoggingIn(false)
        }
    }

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get('/auth/check-auth')
            setUser(response.data.data)
        } 
        catch (error) {
            console.error("Authentication check failed")
            setUser(null)
        } 
        finally {
            setIsCheckingAuth(false)
        }
    }

    const logout = async () => {
        setIsLoggingOut(true)
        try {
            await axiosInstance.post("/auth/logout")
            setUser(null)
        }
        catch(error) {
            console.error("Error in logout context:", error)
            throw error
        }
        finally {
            setIsLoggingOut(false)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    

    return (
        <AuthContext.Provider value={{ 
            user, 
            isSigningUp, 
            setIsSigningUp, 
            signup, 
            isLoggingIn, 
            setIsLoggingIn, 
            login, 
            isCheckingAuth, 
            setIsCheckingAuth, 
            isLoggingOut, 
            setIsLoggingOut,
            logout , 
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)