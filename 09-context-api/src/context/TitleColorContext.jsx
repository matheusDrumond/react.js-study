import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type){
        case 'RED':
            return {...state, color: 'red'}
        case 'BLUE':
            return {...state, color: 'blue'}
        default: 
            return state;
    }
}

export const TitleColorContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' })
    // O state define o valor inicial desse estado, nesse caso é o objeto que informa a cor
    // Já o dispatch é a funçaõ de alteração desse valor, nesse caso o titleColorReducer


    console.log('Title color context: ' + state.color)

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}