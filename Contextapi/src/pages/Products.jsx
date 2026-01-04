// Importa o hook para acessar o contexto
import { useCounterContext } from '../hook/useCounterContext.jsx'

const Products = () => {
  return (
    <div>
        <h2>Produtos</h2>
        <p>Confira nossos produtos!</p>
        <p> Siga nosso instagram</p>
        <p>Contador: {useCounterContext().counter}</p>
    </div>
  )
}

export default Products