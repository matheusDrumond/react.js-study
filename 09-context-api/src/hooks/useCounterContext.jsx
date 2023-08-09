import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export const useCounterContext = () => {

    const context = useContext(CounterContext)

    // Validação do contexto
    if(!context){
        console.log('Contexto inválido!')
    } 

    return context;

}