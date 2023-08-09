import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"



const About = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Sobre</h1>
      <h2>O valor do contexto é {counter}</h2>
    </div>
  )
}

export default About