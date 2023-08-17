// Styles / CSS
import styles from './SignUp.module.css'

const SignUp = () => {
  return (
    <div>
        <h1>Sign up to enjoy</h1>
        <p>Create an account and share moments</p>
        <form>
            <label>
                <span>Name:</span>
                <input 
                type="text" 
                name='displayName'
                placeholder='Type your user name...'
                required
                />
            </label>
            <label>
                <span>E-mail:</span>
                <input 
                type="email" 
                name='displayEmail'
                placeholder='Type your e-mail...'
                required
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                type="password" 
                name='displayPassword'
                placeholder='Type your password...'
                required
                />
            </label>
            <label>
                <span>Confirm password:</span>
                <input 
                type="password" 
                name='confirmPassword'
                placeholder='Confirm your password...'
                required
                />
            </label>
            <button className='btn'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp