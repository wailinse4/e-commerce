import axiosInstance from "../config/axiosInstance.js"

import { createContext, useContext, useState } from "react"
import { toast } from "react-hot-toast"

export const AuthContext = createContext() 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const signup = async (fullName, email, password, confirmPassword) => {
        setIsSigningUp(true)
        try {
            const response = await axiosInstance.post("/auth/signup", { fullName, email, password, confirmPassword })
            setUser(response.data.data)
        }
        catch(error) {
            setUser(null)
            console.log(error)
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
        catch(error) {
            setUser(null)
            console.error(error)
            throw error 
        }
        finally {
            setIsLoggingIn(false)
        }
    }   

    return (
        <AuthContext.Provider value={{ user, setUser, signup, isSigningUp, login, isLoggingIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)