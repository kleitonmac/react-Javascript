// Importamos hooks e componentes do React Router
// useParams -> pega os parâmetros da URL (ex: /products/3 pega o "3")
// Link -> cria links de navegação
// Outlet -> permite renderizar rotas "filhas" (nested routes)
import { useParams, Link, Outlet } from "react-router-dom"

// Importamos o custom hook useFetch para buscar dados da API
import { useFetch } from "../hooks/useFetch"

const Product = () => {
  // Pegamos o parâmetro "id" da URL para saber qual produto carregar
  // Exemplo: "/products/5" -> id = 5
  const { id } = useParams()

  // Montamos a URL com base no id para buscar apenas um produto específico
  const url = "http://localhost:3000/products/" + id

  // Realizamos a requisição usando o custom hook
  // data: renomeamos como 'product'
  // loading: indica se está carregando
  // error: caso aconteça algum erro na requisição
  const { data: product, loading, error } = useFetch(url)

  // Só para visualizar no console o produto retornado
  console.log(product)

  return (
    <div>
      {/* Exibe o ID do produto que está sendo visualizado */}
      <p>Id do produto: {id}</p>

      {/* Tratamento de erro na requisição */}
      {error && <p>Ocorreu um erro ao carregar o produto.</p>}

      {/* Mensagem enquanto os dados estão carregando */}
      {loading && <p>Carregando...</p>}

      {/* Se o produto existir, exibimos as informações */}
      {product && (
        <div>
          {/* Nome do produto */}
          <h2>{product.name}</h2>

          {/* Preço */}
          <p>R$ {product.price}</p>

          {/* Descrição */}
          <p>{product.description}</p>

          {/* Link para rota aninhada (nested route) */}
          {/* Quando clicar, abrirá o componente Info dentro deste */}
          <Link to="info">Mais informações</Link>

          {/* Local onde as rotas filhas serão renderizadas */}
          <Outlet />
        </div>
      )}
    </div>
  )
}

// Exporta o componente para ser usado em rotas
export default Product
