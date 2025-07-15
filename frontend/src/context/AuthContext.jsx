import axiosInstance from "../config/axiosInstance.js"

import { createContext, useContext, useState } from "react"
import { toast } from "react-hot-toast"

export const AuthContext = createContext() 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isSigningUp, setIsSigningUp] = useState(false)

    const signup = async (fullName, email, password, confirmPassword) => {
        setIsSigningUp(true)
        try {
            const response = await axiosInstance.post("/auth/signup", { fullName, email, password, confirmPassword })
            setUser(response.data.data)
            toast.success("Signup successful!")
        }
        catch(error) {
            console.log(error)
            toast.error("Signup failed")
        }
        finally {
            setIsSigningUp(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, signup, isSigningUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)