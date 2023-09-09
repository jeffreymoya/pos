import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null)

  const login = (userData: any) => {
    // Perform login logic
    setUser(userData)
  }

  const logout = () => {
    // Perform logout logic
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
