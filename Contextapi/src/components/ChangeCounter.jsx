import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
// Componente para alterar o contador
// 3-  Alterando contexto
const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter
