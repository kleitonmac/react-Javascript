import { useCounterContext } from '../hook/useCounterContext.jsx'
import { useTitleColorContext } from '../hook/useTitleColorContext.jsx'


const About = () => {
  const {color} = useTitleColorContext();

  return (
    <div>
        <h2 style={{ color: color }}>Bem vindo a page About</h2>
        <p>Esta é a página About.</p>
        <p>Contador na About: {useCounterContext().counter}</p>
    </div>
  )
}

export default About