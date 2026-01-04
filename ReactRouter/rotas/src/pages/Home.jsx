// Importando Link para navegação interna com React Router
import { Link } from 'react-router-dom'
// Importando o custom hook para fazer requisições e lidar com dados
import { useFetch } from '../hooks/useFetch'

import './Home.css'
// carregamento de dados

const Home = () => {
  // URL do endpoint da API (JSON Server, por exemplo)
  const url = "http://localhost:3000/products"

  // Desestruturação do retorno do hook:
  // data renomeada para "items" -> lista de produtos
  // loading -> indica carregamento
  // error -> mensagem de erro caso falhe
  const { data: items, loading, error } = useFetch(url)
  
  return (
    <div className="home">
      <h1>Produtos</h1>

      {/* Exibe erro caso ocorra algum problema na requisição */}
      {error && <p>{error}</p>}

      {/* Se estiver carregando, pode mostrar um feedback ao usuário */}
      {loading && <p>Carregando produtos...</p>}

      {/* Lista de produtos retornados pela API */}
      <ul className="products">

        {/* Verifica se existe items antes de exibir (evita erro) */}
        {items && items.map(item => (
          // Cada item precisa de uma chave única -> item.id
          <li key={item.id}>

            {/* Nome do produto */}
            <h2>{item.name}</h2>

            {/* Preço do produto */}
            <p>R$ {item.price}</p>

            {/* 4 - Rotas Dinamicas */}
            {/* Link leva para a página de detalhes do produto com o ID dinâmico */}
            <Link to={`/products/${item.id}`}>Detalhes:</Link>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

// Exportando o componente para ser usado nas rotas/páginas da aplicação
export default Home
