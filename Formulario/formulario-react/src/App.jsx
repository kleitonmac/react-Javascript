// Importando o componente de formulário
import Myform from './_components/Myform'

function App() {
  // Criando um state simples chamado "count"


  return (
    <>
      {/* Fragmento vazio <>...</> permite retornar múltiplos elementos */}
      <div>
        {/* Título da área do formulário */}
        <h2 className='form'>Conteúdo do formulário</h2>

        {/* 
          Chamando o componente <Myform /> e enviando uma prop chamada "user".
          Essa prop simula um usuário existente (ótimo para fins de edição no formulário).
        */}
        <Myform user={{ name: "kleiton", email: "kleiton@example.com" }} />
      </div>
    </>
  )
}

// Exportando o componente principal da aplicação para ser renderizado
export default App
