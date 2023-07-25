// Estilos
import './Game.css'

// Hooks
import { useState, useRef } from 'react'

const Game = ({ 
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score 
}) => {
    // State para gerenciar a letra do input
    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    // Recebimento da letra digitada no input
    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter)

        // Limpar o input
        setLetter('');

        // Manter o input selecionado
        letterInputRef.current.focus();
    }
  return (
    <div className="game">
        <p className="points">
            <span>Pontuação: {score}</span>
        </p>
        <h1>Advinhe a palavra</h1>
        <h3 className="hint">
            Dica: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s)</p>
        <div className="wordContainer">
            {/* Essa condicional gera um quadrado para cada letra da palavra e exibe ela caso seja recebida pelo input*/}
            {letters.map((letter, index) => guessedLetters.includes(letter) ? (
                    <span key={index} className='letter'>{letter}</span>
                ) : (
                    <span key={index} className='blankSquare'></span>
                )
            )}
        </div>
        <div className='letterContainer'>
            <p>Tente advinhar uma letra</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='letter' 
                maxLength='1' 
                required 
                onChange={(e) => setLetter(e.target.value)}
                value={letter}
                ref={letterInputRef}
                />
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já utilizadas: </p>
            {wrongLetters.map((letter, index) => (
                <span key={index}>{letter}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game