// useParams permite acessar os parâmetros enviados pela URL
// Exemplo: /products/10 -> id = 10
import { useParams } from "react-router-dom"

const Info = () => {
  // Extraindo o parâmetro "id" da URL
  // Esse nome (id) deve ser o mesmo definido na rota dinâmica, ex: /products/:id
  const { id } = useParams()

  return (
    <div>
      {/* Exibe o ID recebido na URL */}
      <h1>Mais informações sobre o produto: {id}</h1>
      {/* Aqui futuramente você pode fazer uma requisição ao backend usando o ID */}
    </div>
  )
}

// Exporta o componente para ser usado nas rotas da aplicação
export default Info
