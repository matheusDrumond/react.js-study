import {useState} from 'react'

const ListRendering = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Josias']);

    const [users, setUsers] = useState([
        {id: 1, name :'Matheus', age: 16},
        {id: 2, name: 'João', age: 30},
        {id: 3, name: 'Nicole', age: 17}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
        // Utiliza o estado atual, que se torna o antigo, do array para gerar um estado novo com o método array;
    }

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
        <button onClick={deleteRandom}>delete random user</button>
    </div>
  )
}

export default ListRendering