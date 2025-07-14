import { createContext, useContext } from "react"

export const AuthContext = createContext() 

export const AuthContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)