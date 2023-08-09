// import { useContext } from "react";

// Importando o contexto
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from "../components/ChangeCounter"

// Refatorando o contexto com o hook
import { useCounterContext } from '../hooks/usecounterContext';

const Home = () => {
  // const { counter } = useContext(CounterContext);

  // Utilizando o hook
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <h2>O valor do contexto é {counter}</h2>
      <ChangeCounter />
    </div>
  )
}

export default Home