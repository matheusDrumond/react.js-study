// Data
import { wordsList } from './data/words' 

// Importação de hooks
import { useState, useCallback, useEffect } from 'react'

// Estilos
import './App.css'

//Importação de componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import End from './components/End'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  // Funções para transitar entre as telas
  const [gameStage, setGameStage] = useState(stages[0].name);

  // Data
  const [words] = useState(wordsList);

  // Setando as palavras, categorias e letras
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  // Função de escolher a palavra e a categoria 
  const pickWordAndCategory = () => {
    //Escolhendo a categoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Escolhendo a palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category };
  }

  // Iniciar o jogo
  const startGame = () => {    
  // Escolher palavra e categoria aleatoriamente
  const { word, category } = pickWordAndCategory();
  console.log(word, category);

  // criando o array de letras da palavra
  let wordLetters = word.split('');
  console.log(wordLetters);
  
  wordLetters = wordLetters.map((l) => l.toLowerCase);

  // Preenchendo os states
  setPickedWord(word);
  setPickedCategory(category);
  setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // Receber o input de letra
  const verifyLetter = (letter) => {
    // Padronizar todas as letras como minúsculas
    const padronizedLetter = letter.toLowerCase();

    // Verificar se a letra já foi utilizada
    if(guessedLetters.includes(padronizedLetter) || wrongLetters.includes(padronizedLetter)){
      return;
    }
  }

  // Reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  }


  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        />)
      }
      {gameStage === 'end' && <End retry={retry}/>}
    </>
  )
}

export default App
