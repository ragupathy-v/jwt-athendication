import React from 'react'
import  { useState } from 'react'
import './css/Register.css'
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../constants';
import api from '../api';

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert('username is taken')
        } finally {
            setLoading(false)
        }
    };

  return (
    <section className='register'>
      <form className='loginform' onSubmit={handleSubmit}>
        <h1>{name}</h1>
        <input className="input" type='text' id='username' name='username'
          onChange={(e)=>setUsername(e.target.value)} placeholder='Username'></input>

        <input type='password' className="input" id='password'
          name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
        <button className='button ' type='submit'>submit</button>
      </form>
      </section>
  )
}

export default Form