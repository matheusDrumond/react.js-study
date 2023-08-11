// import { useContext } from "react";

// Importando o contexto
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from "../components/ChangeCounter"

// Refatorando o contexto com o hook
import { useCounterContext } from '../hooks/usecounterContext';

// Contextos mais complexos
import { UseTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  // Utilizando o hook
  const { counter } = useCounterContext();

  // Contextos mais complexos
  const { color, dispatch } = UseTitleColorContext();

  // Alterando contextos mais complexos
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <h2>O valor do contexto é {counter}</h2>
      <ChangeCounter />
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home