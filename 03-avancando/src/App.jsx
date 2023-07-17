//Styles
import './App.css'

// Importações de componentes
import ManageData from './components/ManageData'
import ListRendering from './components/ListRendering'

//Importando a imagem de assets
import City from './assets/city.jpg'

function App() {
  return (
    <>
      <h1>Avançando em React</h1>

      {/*Imagem em Public*/}
      <div>
        {/*O React faz o link da imagem sem precisar indicar a pasta public*/}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Imagem de uma cidade" />
      </div>
      <ManageData />
      <ListRendering />
    </>
  )
}

export default App
