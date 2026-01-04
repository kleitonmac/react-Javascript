// src/hooks/useFetch.jsx
import { useState, useEffect } from "react";

// 4 Custom hook para requisições fetch
// arrow function
// Este hook será reutilizado em vários componentes para fazer requisições HTTP
export const useFetch = (url) => {
  // Guarda os dados retornados pela requisição GET
  const [data, setData] = useState(null);

  // 5 refatorando o post
  // Aqui guardamos configurações para requisições (POST/DELETE)
  const [config, setConfig] = useState(null);
  // Armazena o método que será utilizado na requisição (POST/DELETE)
  const [method, setMethod] = useState(null);
  // Trigger para recarregar os dados após uma ação (POST/DELETE)
  const [callFetch, setCallFetch] = useState(false);

  // 6 Loading
  // Estado para indicar quando a requisição está em andamento
  const [loading, setLoading] = useState(false);

  // 7 tratamento de erros
  // Guarda mensagens de erro caso aconteça algum problema
  const [error, setError] = useState(null);

  // 8 desafio 6 - deletar dados
  // Armazena o ID do item que será deletado na requisição DELETE
  const [itemId, setItemId] = useState(null);

  // 4 - continuação do custom hook useFetch (GET)
  // useEffect dispara sempre que a URL mudar ou callFetch for alterado
  // Isso faz com que a requisição GET seja refeita quando necessário
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ativando o loading antes da requisição

      try {
        // Fazendo a requisição GET usando fetch
        const res = await fetch(url);
        const json = await res.json(); // Transformando o retorno em JSON
        setData(json); // Atualiza o estado com os dados recebidos
      } catch (error) {
        // Captura qualquer erro relacionado à requisição
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false); // Encerra o loading após finalização
    };

    fetchData(); // Executa a função imediatamente

    // dependências: executa quando a URL muda ou callFetch muda de valor
  }, [url, callFetch]);

  // corrigindo os argumentos
  // Função que configura a requisição antes dela ser feita
  // "payload" pode ser o corpo do POST ou o ID no DELETE
  // "method" define qual ação será executada
  const httpConfig = (payload, method) => {
    if (method === "POST") {
      // Para POST, enviamos o payload como body da requisição
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        // Convertendo o objeto JS para JSON
        body: JSON.stringify(payload),
      });
      setMethod(method);
      setCallFetch(true); // Força o GET ser feito novamente (atualizar lista)
    } else if (method === "DELETE") {
      // Para DELETE, não enviamos body, só confirmamos o método
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setItemId(payload); // ID do item a ser deletado
    }
  };

  // 5 refatorando o post (POST e DELETE)
  // Este useEffect é responsável por realizar as requisições POST e DELETE
  useEffect(() => {
    const httpRequest = async () => {
      // Se o método ainda não foi definido, não faz nada
      if (!method) return;

      let json; // variável utilizada para armazenar possíveis retornos

      if (method === "POST") {
        // Envia os dados utilizando fetch com config pré-definida
        const res = await fetch(url, config);
        json = await res.json(); // Salvando o retorno como JSON
        // Atualiza o estado para forçar o GET novamente
        setCallFetch((prev) => !prev);

      } else if (method === "DELETE") {
        // No DELETE, precisamos adicionar o ID na URL
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);
        // json-server não retorna body no DELETE, então não usamos res.json()

        // Atualiza os dados automaticamente após a exclusão
        setCallFetch((prev) => !prev); // Força recarregar dados
      }
    };

    httpRequest(); // chama a função acima

    // dependências: quando qualquer variável mudar, reexecuta (se necessário)
  }, [config, method, url, itemId]);

  // Retorna tudo o que será utilizado nos componentes
  // data -> dados do GET
  // httpConfig -> função para fazer POST/DELETE
  // loading -> estado visual enquanto carrega
  // error -> mensagem de erro, se existir
  return { data, httpConfig, loading, error };
};
