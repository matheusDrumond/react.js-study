import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState('Matheus');

  return (
    <div>
        {/*Sintaxe 1 - Checagem mais simples -> x && bloco1, se houver x, executa bloco 1, !x && bloco2 se x for diferente de true, executa bloco 2*/}
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for verdadeiro, sim</p>} {/*Como o x está com o state verdadeiro, esse <p> será impresso*/}
            {!x && <p>Agora x é falso</p>}
            {/*Sintaxe mais simples de checagem de valor verdadeiro ou falso*/}
        </div>
        {/*Sitaxe 2 - Complexidade maior que a primeira, dois casos, true or false -> condição ? (true -> {}) : (false -> {}) */}
        <div>
            {name === 'Matheus' ? (
                <p>O nome é Matheus</p>
            ) : (
                <p>O nome não é Matheus</p>
            )}
            <button onClick={() => setName('João')}>Change name</button>
        </div>
    </div>
  )
}

export default ConditionalRender