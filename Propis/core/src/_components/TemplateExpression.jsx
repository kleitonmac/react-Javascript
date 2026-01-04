// Componente funcional chamado TemplateExpression
const TemplateExpression  = () => {

    // Variável simples (string)
    const name = 'Kleiton';

    // Objeto com duas propriedades: idade e profissão
    const data = {
        age: 27,
        job: 'Desenvolvedor'
    };

    // Retorno JSX do componente
    return (
        <div>
            {/* Usando template expressions para inserir variáveis dentro do JSX */}
            <h1>Olá {name}, tudo bem com você?
                
                {/* Acessando propriedades do objeto com data.job e data.age */}
                <h2> Você atua em qual profissão {data.job}, e tenho {data.age}</h2>
            </h1>
        </div>
    );
};

// Exporta o componente para ser usado em outros arquivos
export default TemplateExpression;
