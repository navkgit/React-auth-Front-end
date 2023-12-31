import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';

function LogInPage() {
    const[token, setToken] = useToken();
    const [errorMessage,setErrorMessage] =useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useNavigate();

    const onLogInClicked = async ()=>{
        const response = await axios.post('/api/login',{
            email : emailValue,
            password : passwordValue,
        });

        const {token} = response.data;
        setToken(token);
        history('/');
    }

  return (
    <div className='content-container'>
        <h1>Log In</h1>

        {errorMessage && <div className='fail'>{errorMessage}</div>}
        <input value={emailValue}
               onChange={ (e)=> setEmailValue(e.target.value)}
               type='email'
               placeholder='someone@gmail.com'/>

        <input value={passwordValue} 
               onChange={ (e)=> setPasswordValue(e.target.value)}
               type='password'
               placeholder='password'/>
        
        <hr />
        <button
            disabled={!emailValue || !passwordValue}
            onClick={ onLogInClicked}>Log In</button>

        <button
            onClick={ ()=> history('/forgot-password')}>Forgot your password?</button>

        <button
            onClick={ ()=>history('/signup')}>Don't have an account? Sign Up</button>
    </div>
  )
}

export default LogInPage