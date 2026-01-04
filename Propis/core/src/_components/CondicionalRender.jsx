// Importa o hook useState do React para gerenciar estados locais
import { useState } from 'react';

// Componente CondicionalRender
const CondicionalRender = () => {

  // "x" é uma variável de estado iniciada com true
  // Aqui não usamos a função de atualização, então só pegamos o valor
  const [x] = useState(true);

  // "nome" guarda o nome atual e "setName" é a função que atualiza esse nome
  const [nome, setName] = useState('alana');

  return (
    <div>
        {/* ------------------------------- */}
        {/* 💡 Renderização condicional simples com operador AND (&&) */}
        {/* Se x for true → o conteúdo após && será mostrado */}
        {/* Se x for false → nada aparece */}
        {/* ------------------------------- */}
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}

        {/* ------------------------------- */}
        {/* 💡 Renderização condicional com if ternário */}
        {/* Estrutura: condição ? resultado_se_verdadeiro : resultado_se_falso */}
        {/* Aqui, verificamos se o nome é 'kleiton' */}
        {/* ------------------------------- */}
        <h1>If ternário</h1>
        {nome === 'kleiton' ? (
          <div>
              <div>
                  <p>Meu nome é {nome}</p> {/* Mostra o nome se for 'kleiton' */}
              </div>
          </div>
        ) : (
          // Se o nome NÃO for 'kleiton', esse bloco é exibido
          <p>Nome não encontrado</p>
        )}

        {/* ------------------------------- */}
        {/* 💡 Botão para alterar o estado */}
        {/* Quando clicado, altera o valor de nome para 'kleiton' */}
        {/* Isso faz o componente renderizar novamente com base nas condições acima */}
        {/* ------------------------------- */}
        <button onClick={() => setName('kleiton')}>
          Mudar nome
        </button>
    </div>
  )
}

// Exporta o componente para uso em outros arquivos
export default CondicionalRender
