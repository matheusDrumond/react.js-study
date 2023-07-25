// Estilos
import './StartScreen.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
        <h1>Secret word</h1>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={startGame}>Jogar</button>
    </div>
  )
}

export default StartScreen