// Importação de componentes
import MyForm from './components/MyForm'

// Estilos
import './App.css'

function App() {

  return (
    <>
    <MyForm user={{name: 'Matheus', email: 'matheus@gmail.com', bio: 'Sou o líder da equipe de desenvolvedores', role: 'leader'}}/>
    </>
  )
}

export default App
