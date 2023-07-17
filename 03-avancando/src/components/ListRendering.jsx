import {useState} from 'react'

const ListRendering = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Josias']);

    const [users] = useState([
        {id: 1, name :'Matehus', age: 16},
        {id: 837, name: 'João', age: 30},
        {id: 38, name: 'Nicole', age: 17}
    ])
  return (
    <div>
        <ul>
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
            {/*Essa forma de 'criar' key satravés do index é uma má prática e deve ser evitado*/}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
            {/*Essa prática é melhor, normalmente esses dados virão com id do servidor, e serão únicos*/}
        </ul>
    </div>
  )
}

export default ListRendering