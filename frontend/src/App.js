import './App.css';
import Container from 'react-bootstrap/Container';

import Login from './conponents/Login'
import Profile from './conponents/Profile';
import Register from './conponents/Register'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProtectedRoute from './conponents/protectedroute';
import { useEffect } from 'react';

function Logout() {
  const navigate=useNavigate()

  useEffect(() => {
    // Perform the logout logic here
    localStorage.clear();
    navigate('/login');
  }, []);
 return null 
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}
function App() {

  return (
    <>


      <Routes>

        <Route path='/' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }></Route>
        <Route path='login/' element={<Login />}>
        </Route>
        <Route path='login/register/' element={<RegisterAndLogout />} />
        <Route path='logout/' element={<Logout />} />
      </Routes>

      <Container>

      </Container>



    </>
  )
}

export default App;
