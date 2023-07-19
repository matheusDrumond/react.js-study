//Styles
import './App.css'

// Importações de componentes
import ManageData from './components/ManageData'
import ListRendering from './components/ListRendering'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

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

  function showMessage(){
    console.log('Evento do componente pai executado!')
  }

  const [message, setMessage] =useState(' ')

  function handleMessage(msg){
    setMessage(msg);
  };

  const users = [
    {id: 1, name: 'Matheus', age: 16, job: 'Programador'},
    {id: 2, name: 'João', age: 20, job: 'Comerciante'},
    {id: 3, name: 'Maria', age: 19, job: 'Designer'},
    {id: 4, name: 'Ana', age: 17, job: 'Estudante'},
  ];

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
      <CarDetails id={4} brand='VolksWagen' km={0} color='black' newCar={true}/>
      {/*Reaproveitamdnto de componentes*/}
      <CarDetails id={5} brand='Audi' km={30000} color='white' newCar={false}/>
      <CarDetails id={6} brand='Fiat' km={0} color='red' newCar={true}/>
      {/*Renderização de lista com array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar}
        />
      ))}
      {/*Fragments*/}
      <Fragments propFragment='Terceiro título'/>
      {/*Children*/}
      <Container myValue={1}>
        <p>Esse é o elemento children</p>
      </Container>
      <Container myValue={2}>
        <p>Esse é o segundo elemento children</p>
      </Container>
      {/*Função como prop*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Prática, renderização de lista e renderização condicional*/}
      {users.map((user) =>(
        <UserDetails 
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </>
  )
}

export default App
