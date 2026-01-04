// Importamos useSearchParams para ler parâmetros da URL (ex: ?q=camisa)
// Importamos Link para navegação entre páginas
import { useSearchParams, Link } from "react-router-dom";
// useFetch é nosso hook personalizado para requisições
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  // useSearchParams retorna os parâmetros da URL, exemplo:
  // Em /search?q=camiseta → searchParams.get("q") retorna "camiseta"
  const [searchParams] = useSearchParams();

  // Pegamos o valor do parâmetro "q"; caso esteja vazio, definimos como string vazia
  const query = searchParams.get("q") || "";

  // Montamos a URL para buscar produtos com base na query
  // searchParams.toString() transforma os parâmetros em formato da URL (?q=algo)
  const url = "http://localhost:3000/products?" + searchParams.toString();

  // Faz a requisição e renomeia 'data' para 'items' para facilitar a leitura
  // loading: indica carregamento
  // error: indica falha na requisição
  const { data: items, loading, error } = useFetch(url);

  //   filtro de buscar intens pela query
  // Filtramos itens que incluem o texto buscado, independente de maiúsculas/minúsculas
  // O "?" após items evita erro caso seja null e retorna undefined
  const filteredItems =
    items?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    ) || []; // Se items for undefined, retorna array vazio para evitar erro

  return (
    <div>
      {/* Título da página de resultados */}
      <h1>Resultados Disponíveis</h1>

      {/* Exibe mensagem enquanto os dados estão sendo carregados */}
      {loading && <p>Carregando...</p>}

      {/* Exibe caso a requisição de erro */}
      {error && <p>Erro ao buscar produtos.</p>}

      {/* Se não estiver carregando e a lista estiver vazia, mostra aviso */}
      {!loading && filteredItems.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      {/* Listagem dos produtos filtrados */}
      <ul className="products">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {/* Nome do produto */}
            <h2>{item.name}</h2>
            {/* Preço */}
            <p>R$ {item.price}</p>
            {/* Link para detalhes do produto usando rota dinâmica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exportamos para usar nas rotas
export default Search;
