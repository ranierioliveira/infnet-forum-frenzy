import React, {useState} from 'react';
import { AppBar } from './pages/AppBar/AppBar';
import { Login }  from './pages/Login/Login';
import './App.css'

import "@fontsource/roboto";

export default function App() {
  
  const [user, setUser] = useState(null);

  const handleLogin = (userName) => {
    setUser(userName);
  }

  
  return (
    <div>
      <AppBar/>
      { user && (
      <div>
        <p>Logado</p>
      </div>
      )} {!user &&(
        <div>
          <Login onLogin={handleLogin}/>
        </div>
      )}
    </div>
    
  )
}
