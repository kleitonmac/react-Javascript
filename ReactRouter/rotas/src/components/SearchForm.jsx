// useNavigate: hook do React Router para navegar via código (sem clicar em links)
import { useNavigate } from "react-router-dom";
// useState: hook para gerenciar o valor digitado no campo de busca
import { useState } from "react";

const SearchForm = () => {
  // Criando uma função de navegação
  const navigate = useNavigate();

  // Estado que armazena o texto digitado pelo usuário
  const [query, setQuery] = useState("");

  // Função executada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Se o campo estiver vazio, não faz nada (impede navegação)
    if (!query) return;

    // Navega para a rota /search passando a busca na URL como parâmetro (?q=)
    // encodeURIComponent evita erros com espaços e caracteres especiais
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    // onSubmit chama handleSubmit quando o usuário pressiona "Enter" ou clica em "Buscar"
    <form onSubmit={handleSubmit}>
      
      {/* Campo de texto controlado pelo estado "query" */}
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado sempre que digitar
        value={query} // Valor sempre sincronizado com o estado (input controlado)
      />

      {/* Botão de envio do formulário */}
      <input type="submit" value="Buscar" />
    </form>
  );
};

// Exporta o componente para uso em outras partes do projeto
export default SearchForm;
