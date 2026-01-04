import './App.css'
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './page/Home'
import Menu from './page/Menu'
import Sobre from './page/Sobre'
import Contato from './page/Contato'
import Admin from './page/Admin'
import Login from './page/Loguin'

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar />

        <header className="app-header">
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Menu />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
