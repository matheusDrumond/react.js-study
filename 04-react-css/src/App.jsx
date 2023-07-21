// Importação de componentes
import MyComponent from './components/MyComponent'
import Title from './components/Title';

// Estilos
import './App.css'

function App() {

  const n = 5;

  const redP = true;

  return (
    <>
    {/* CSS Global */}
    <h1>React com CSS</h1>
    {/* CSS de componentes */}
    <MyComponent />
    <p>Parágrafo do App</p>
    {/* Inline-CSS */}
    <p style={{color: 'purple', backgroundColor: 'yellow'}}>Esse elemento foi estilizado em inline-style</p>
    {/* CSS inline dinâmico */}
    <p style={n > 10 ? {color: 'magenta'} : {color: 'orange'}}>CSS inline dinâmico</p>
    <p style={n < 10 ? {color: 'magenta'} : {color: 'orange'}}>CSS inline dinâmico</p>
    {/* Classes dinâmicas */}
    <p className={redP ? 'red-p' : 'commom-p'}>Esse trecho foi manipulado com classes dinâmicas</p>
    <p className={!redP ? 'red-p' : 'commom-p'}>Esse trecho foi manipulado com classes dinâmicas</p>
    {/* CSS Modules */}
    <Title />
    </>
  )
}

export default App
