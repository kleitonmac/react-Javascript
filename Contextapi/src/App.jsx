import './App.css'
import { Routes, Route, } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  
  
  return (
    <div>
      <h1>Context API</h1>
      {/*  2 -- React Router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
    </div>
  )
}

export default App
