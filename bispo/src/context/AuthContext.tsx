import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Verifica se há autenticação salva no localStorage
    const savedAuth = localStorage.getItem('isAuthenticated')
    return savedAuth === 'true'
  })

  useEffect(() => {
    // Salva o estado de autenticação no localStorage
    localStorage.setItem('isAuthenticated', String(isAuthenticated))
  }, [isAuthenticated])

  const login = (username: string, password: string): boolean => {
    // Credenciais do administrador
    // Em produção, isso deve ser feito no backend
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


