// Importaão de hooks
import { useState } from "react";

const ManageData = () => {

    {/*Adicionando valor através de variável */}
    let someData = 10;

    // Adicionando o valor através de useState
    const [number, setNumber] = useState(15);
    console.log(number);
    return (
        <div>
            <div>
                valor: {someData}
                <button onClick={()=>someData = 15}>Mudar o valor da variável</button> 
                {/*O valor da variável não é alterado*/}
            </div>
            <div>
                <p>O valor de number é {number}</p>
                <button onClick={()=>{setNumber(number + 1)}}>Alterar state de number</button>
                {/*O valor de number é alterado com sucesso e renderizado novamente a cada clique*/}
            </div>
        </div>
  )
}

export default ManageData