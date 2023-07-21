//Importação de hooks
import styles from './MyForm.module.css'

// Estilos
import { useState } from 'react'

const MyForm = () => {
    // Gerenciamento de dados por useState
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name);
    console.log(email);

  return (
    <div>
        {/* Criando forms */}
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite seu nome...' onChange={handleName}/>
            </div>
            {/* Label envolvendo o input */}
            <div>
                <label>
                    <span>Email</span>
                    <input 
                    type="email" 
                    name='email' 
                    placeholder='Digite seu e-mail...' 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default MyForm