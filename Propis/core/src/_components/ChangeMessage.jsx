// Componente ChangeMessage
// Ele recebe uma função chamada "handleMessage" como propriedade (prop)
// Essa função será usada para enviar mensagens para o componente pai
const ChangeMessage = ({ handleMessage }) => {

    // Array com três mensagens que serão usadas para alterar o estado no componente pai
    const messages = ['Oi', 'Olá', 'E aí'];

    return (
      <div>
        {/* Cada botão chama a função handleMessage com uma mensagem diferente
           - handleMessage(messages[0]) → envia "Oi"
           - handleMessage(messages[1]) → envia "Olá"
           - handleMessage(messages[2]) → envia "E aí"
           
           Essa função será executada lá no componente pai, alterando o estado
           e atualizando a interface conforme a mensagem enviada.
        */}
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
      </div>
    )
}

// Exporta o componente para ser utilizado em outro lugar
export default ChangeMessage
