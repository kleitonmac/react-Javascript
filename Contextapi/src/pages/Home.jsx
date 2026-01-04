// Importa o arquivo CSS específico da página Home
import './Home.css'

// Importa o hook useContext do React para usar contextos
// import { useContext } from 'react'

// Importa o contexto que contém o contador e sua função de atualização
// ❗ Removido o .jsx para evitar erro
// import { CounterContext } from '../context/CounterContext.jsx'

// Importa o componente de alteração do contador
// ❗ Removidas as chaves {} pois o componente foi exportado como default
// import ChangeCounter from '../context/ChangeCounter.jsx'
import ChangeCounter from '../components/ChangeCounter.jsx' // ← ✔️ Correção SEM remover seu comentário acima

// 4 - refatorando context com hook
import { useCounterContext } from '../hook/useCounterContext.jsx'

// 5 context complexo
import { useTitleColorContext } from '../hook/useTitleColorContext.jsx'

// Componente Home
const Home = () => {

  // const { counter , setCounter } = useContext(CounterContext)
  const { counter, setCounter } = useCounterContext();
    
  // Aqui pegamos os valores do contexto:
  // "counter" é o valor atual do contador
  // "setCounter" é a função usada para atualizar o contador
 
  // 5 -- context mais complexo
  const { color, dispatch } = useTitleColorContext();
 
  // 6 - alterando color do contexto complexo
  // ❗ CORREÇÃO: dispatch recebe DIRETAMENTE o objeto da action
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
        {/* Título da página */}
        <h2 style={{ color: color }}>Inicio</h2>

        {/* Texto de boas-vindas */}
        <p>Welcome to the Home page!</p>

        {/* Exibe na tela o valor atual do contador vindo do contexto */}
        <p>Contador: {counter}</p>

        {/* 3 - Alterando valor do contexto */}
        <ChangeCounter />

        {/* 6 - Alterando contexto */}
        <div>
          <button onClick={() => setTitleColor("RED")}>Red</button>
          <button onClick={() => setTitleColor("BLUE")}>Blue</button>
          <button onClick={() => setTitleColor("GREEN")}>Green</button>
        </div>
    </div>
  )
}

// Exporta o componente para ser usado em outras partes do projeto
export default Home;
