// Importamos o CSS geral do App
import './App.css'

// Importamos os componentes de rotas do React Router
// Routes: agrupador das rotas
// Route: define cada rota (caminho e componente)
// Navigate: redireciona de uma rota antiga para uma nova
import { Routes, Route, Navigate } from 'react-router-dom'

// components
// Navbar: menu de navegação principal
import Navbar from './components/Navbar'

// Pages - páginas carregadas pelas rotas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'


function App() {
  return (
    <div>
      {/* Título da aplicação */}
      <h1>React Router aula</h1>

      {/*  2 -- React Router */}
      {/* Navbar fica acima das rotas para aparecer em todas as páginas */}
      <Navbar />

      {/*9 - Search Params  */}
      {/* Formulário de busca que envia dados via URL (ex: /search?q=camisa) */}
      <SearchForm />

      {/* Container principal onde todas as rotas são definidas */}
      <Routes>

        {/* Rota inicial: quando acessar "/" abre a Home */}
        <Route path="/" element={<Home />} />

        {/* Página sobre o projeto */}
        <Route path="/about" element={<About />} />

        {/* 4- Rotas Dinamicas */}
        {/* ":id" é um parâmetro variável (valor pode ser 1,2,3...) */}
        {/* Ex: /products/10 → carrega Product com id=10 */}
        <Route path="/products/:id" element={<Product />}/>

        {/* 6 -- Nested Routes */}
        {/* Página de informações adicionais dentro da rota de produto */}
        {/* Ex: /products/10/info → Info recebe id via URL */}
        <Route path="/products/:id/info" element={<Info />} />

        {/*8 -- No match router pagina 404 */}
        {/* "*" captura qualquer rota inexistente e exibe a página de erro */}
        <Route path="*" element={<NotFound />} />

        {/*9 -- Search */}
        {/* Página que mostra resultado de buscas com base no termo da URL */}
        <Route path="/search" element={<Search />} />

        {/* Redirect */}
        {/* Se alguém acessa /company, redirecionamos para /about */}
        {/* Navigate substitui o componente automaticamente */}
        <Route path="/company" element={<Navigate to="/about" />} />
      </Routes>
    </div>
  )
}

// Exportamos o App para ser usado no index.jsx
export default App
