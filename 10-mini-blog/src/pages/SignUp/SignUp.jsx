// Styles / CSS
import styles from './SignUp.module.css'

// Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const SignUp = () => {
    // Data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Importing from the custom hook
    const { createUser, error: authError, loading } = useAuthentication()

    // Submit
    const handleSubmit = async (e) => {
        // Don't reload
        e.preventDefault();

        // Reset errors
        setError('');

        // Define the user's data
        const user = {
            name,
            email,
            password
        }

        // Check passowrd
        if(password != confirmPassword){
            setError('The passwords need to be the same')
            return
        }

        const res = await createUser(user)

        console.log(user);
    }

  return (
    <div>
        <h1>Sign up to enjoy</h1>
        <p>Create an account and share moments</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name:</span>
                <input 
                type="text" 
                name='name'
                placeholder='Type your user name...'
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </label>
            <label>
                <span>E-mail:</span>
                <input 
                type="email" 
                name='email'
                placeholder='Type your e-mail...'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                type="password" 
                name='password'
                placeholder='Type your password...'
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <label>
                <span>Confirm password:</span>
                <input 
                type="password" 
                name='confirmPassword'
                placeholder='Confirm your password...'
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                />
            </label>
            <button className='btn'>Sign Up</button>

            {/* Display error */}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default SignUp