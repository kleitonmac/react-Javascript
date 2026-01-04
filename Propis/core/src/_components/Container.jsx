// Componente Container
// Ele recebe uma prop especial chamada "children"
// "children" representa QUALQUER conteúdo JSX que for colocado
// dentro do componente Container quando ele for usado
const Container = ({ children }) => {
  return (
    <div>
        {/* Título fixo do componente */}
        <h2>Titulo do Container</h2>

        {/* 
          Aqui é onde o conteúdo passado como children será exibido.
          Ou seja, qualquer elemento que estiver entre <Container> ... </Container>
          aparece exatamente aqui.
        */}
        {children}
    </div>
  )
}

// Exporta o componente para ser importado e usado em outros arquivos
export default Container
