//Styles
import './App.css'

// Importações de componentes
import ManageData from './components/ManageData'
import ListRendering from './components/ListRendering'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

//Importação de hooks
import { useState } from 'react'

//Importando a imagem de assets
import City from './assets/city.jpg'

function App() {
  const name = 'Matheus'
  const [userName] = useState('matheus');

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Red', newCar: true, km: 0},
    {id: 2, brand: 'Audi', color: 'White', newCar: true, km: 0},
    {id: 3, brand: 'Lamborghini', color: 'Yellow', newCar: false, km: 1000},
    {id: 4, brand: 'BMW', color: 'Black', newCar: false, km: 2000}
  ]

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
      {/*useState*/}
      <ManageData />
      {/*Renderização em lista*/}
      <ListRendering />
      {/*RenderizaçãoCondicioanl*/}
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={name} userName={userName} />
      {/*Destructuring*/}
      <CarDetails brand='VolksWagen' km={0} color='black' newCar={true}/>
      {/*Reaproveitamdnto de componentes*/}
      <CarDetails brand='Audi' km={30000} color='white' newCar={false}/>
      <CarDetails brand='Fiat' km={0} color='red' newCar={true}/>
      {/*Renderização de lista com array de objetos*/}
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}
    </>
  )
}

export default App
