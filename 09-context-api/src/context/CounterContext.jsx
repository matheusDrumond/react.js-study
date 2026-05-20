// Criando o context
import { createContext, useState } from 'react'

export const CounterContext = createContext();

// Criando o provider
// React 19: <CounterContext> pode ser usado diretamente sem .Provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext value={{counter, setCounter}}>
            {children}
        </CounterContext>
    )
}