import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/profile.css'

function Profile() {
  const navigate = useNavigate()
  function Logout() {
    navigate('/login');
  }

  return (
    <section className='profilepage'>
    <div>
      <h1>sign in succesfull</h1>
      <button className='button' onClick={Logout} >logout</button>
    </div>
    </section>
  )
}

export default Profile;