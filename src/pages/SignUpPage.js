import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';

function SignUpPage() {
    const [errorMessage,setErrorMessage] =useState('');
    const [token, setToken] = useToken();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useNavigate();

    const onSignUpClicked = async() => {
        const response = await axios.post('/api/signup',{
            email : emailValue,
            password : passwordValue,
        });

        const {token} = response.data;
        setToken(token);
        history('/');
    }

  return (
    <div className='content-container'>
        <h1>Sign Up</h1>

        {errorMessage && <div className='fail'>{errorMessage}</div>}
        <input value={emailValue}
               onChange={ (e)=> setEmailValue(e.target.value)}
               type='email'
               placeholder='someone@gmail.com'/>

        <input value={passwordValue} 
               onChange={ (e)=> setPasswordValue(e.target.value)}
               type='password'
               placeholder='password'/>
        
        <input value={confirmPasswordValue} 
               onChange={ (e)=> setConfirmPasswordValue(e.target.value)}
               type='password'
               placeholder='password'/>
        
        <hr />
        <button
            disabled={!emailValue || !passwordValue ||
                passwordValue !== confirmPasswordValue
            }
            onClick={ onSignUpClicked}>Sign In</button>

        <button
            onClick={ ()=>history('/login')}>Already have an account? Log In</button>
    </div>
  )
}

export default SignUpPage