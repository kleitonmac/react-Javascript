// Componente que representa uma página de erro "404 - Não Encontrada"
// Usado quando o usuário tenta acessar uma rota que não existe

const NotFound = () => {

  // O retorno do componente é o conteúdo renderizado na tela
  // Nesse caso, estamos mostrando uma mensagem de erro amigável
  return (
    <div>
      {/* Título principal informando que a página não foi encontrada */}
      <h1>Página Não Encontrada!</h1>

      {/* Texto explicando o motivo do erro para o usuário */}
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  )
}

// Exporta esse componente para poder ser usado em outras partes da aplicação
// Geralmente usado como rota fallback no React Router
export default NotFound
