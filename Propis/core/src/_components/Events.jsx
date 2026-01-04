// Componente Events
const Events = () => {

    // -----------------------------------------
    // 💡 Função para lidar com eventos
    // Quando chamada, ela recebe o "evento" (e),
    // que contém informações sobre a interação do usuário
    // Ex.: clique do mouse, tecla pressionada, etc.
    // -----------------------------------------
    const handleMyEvents = (e) => {
        console.log(e); // Mostra detalhes do evento no console
        console.log('Ativou o evento'); // Mensagem de confirmação
    };

    // -----------------------------------------
    // 💡 Função para renderização condicional
    // Ela recebe um valor (x) e retorna um JSX diferente
    // dependendo se x é true ou false
    // -----------------------------------------
    const renderSomething = (x) => {
          if(x) {
            // Se x for true, retorna este elemento
            return <h1>Renderizando isso</h1>;
          } else {
            // Se x for false, retorna este
            return <h1>Também posso renderizar isso</h1>;
          }
    };

    return (
        <div>
            {/* -------------------------
                Evento de clique (onClick)
                Aqui passamos a função diretamente
                sem parênteses → só será executada
                quando houver o clique
            -------------------------- */}
            <div>
                <button onClick={handleMyEvents}>Clique aqui</button>
            </div>

            {/* -------------------------
                Evento com função inline
                Usamos arrow function para executar
                algo diretamente no evento
            -------------------------- */}
            <div>
                <button onClick={() => console.log("Ativou")}>
                    Clique aqui também
                </button>
            </div>

            {/* -------------------------
                Exemplo de chamadas da função
                de renderização condicional
                Cada uma vai mostrar um resultado diferente
            -------------------------- */}
            {renderSomething(true)}   {/* Exibe: Renderizando isso */}
            {renderSomething(false)}  {/* Exibe: Também posso renderizar isso */}
        </div>
    )
}

// Exporta o componente para uso em outros arquivos
export default Events;
