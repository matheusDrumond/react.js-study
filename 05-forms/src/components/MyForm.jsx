// Estilos
import styles from './MyForm.module.css'

// Importação de hooks
import { useState } from 'react'

const MyForm = ({user}) => {
    // Gerenciamento de dados por useState
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState( user ? user.email : '') // Controlled inputs

    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '');

    // Froma mais complexa de recebr os valores do input
    const handleName = (e) => {
        setName(e.target.value);
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando o formulário');
        console.log(name, email, bio, role);

        // Limpar o formulário
        setEmail('');
        setName('');
        setBio('');
        setRole('');
    }

  return (
    <div>
        {/* Criando forms */}
        {/* Enviando o form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                type="text" 
                name='name' 
                placeholder='Digite seu nome...' 
                onChange={handleName}
                value={name}
                />
            </div>
            {/* Label envolvendo o input */}
            <div>
                <label>
                    <span>Email</span>
                    {/* Forma simplificada de receber o valor do input */}
                    <input 
                    type="email" 
                    name='email' 
                    placeholder='Digite seu e-mail...' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                    {/* Quando são muitos inputs, essa forma é mais simples e rápida de receber os valores
                    porém, dificulta a manipulação dos dados, então vai depender da situação. */}
                </label>
            </div>
            {/* textarea */}
            <div>
                <label>
                <span>Biografia</span>
                <textarea 
                name="bio"
                placeholder='Descrição do usuário'
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>
                </label>
            </div>
            {/* select */}
            <div>
                <label>
                    <span>Ocupação</span>
                    <select 
                    name="ocupation"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="admin">Administrador</option>
                        <option value="leader">Líder</option>
                    </select>
                </label>
            </div>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default MyForm