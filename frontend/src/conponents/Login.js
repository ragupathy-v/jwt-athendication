import React from 'react'
import './css/Login.css'
import { useState } from 'react'
import {  useNavigate  } from 'react-router-dom'
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../constants';
import api from '../api';
function Login() {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const method='login'

    const navigator =useNavigate()
     
    const redirectregister=()=>{
        navigator('register/')
    }    

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post('/account/api/token/', { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("login/")
            }
        } catch (error) {
            alert('check username and password correctly')
        } finally {
            setLoading(false)
        }
    };

   

    return (

        <section className='login'>
            <form className='loginform' onSubmit={handleSubmit}>
                <h1>Login</h1>

                <input type='text' className='input' onChange={(e)=>setUsername(e.target.value)} name='username' placeholder='username'></input>

                <input type='password' className='input' onChange={(e)=>setPassword(e.target.value)} name='Password' placeholder='Password'></input>

                <button className='button'  > Login</button>
                <button className='button' onClick={redirectregister} >New user</button>


            </form>

        </section>
    )
}

export default Login;