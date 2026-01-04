// Componente Challenge
// Ele demonstra a criação de variáveis, uso de JSX e evento de clique
const Challenge = () => {

    // Declaração de duas variáveis numéricas
    const a = 10;
    const b = 10;

    return (
        <div>
            {/* Exibe o valor de A na tela */}
            <p>A: {a}</p>

            {/* Exibe o valor de B na tela */}
            <p>B: {b}</p>

            {/* Botão com evento de clique (onClick)
                Quando o botão é clicado, uma função arrow é executada
                Ela envia para o console do navegador a soma de A + B */}
            <button onClick={() => console.log(`O resultado da soma é ${a + b}`)}>
                Clique aqui
            </button>
        </div>
    );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Challenge;
