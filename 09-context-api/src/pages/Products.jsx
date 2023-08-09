import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


const Products = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Produtos</h1>
      <h2>O valor do contexto é {counter}</h2>
    </div>
  )
}

export default Products