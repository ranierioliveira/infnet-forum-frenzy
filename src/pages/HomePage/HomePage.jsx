import React, { useState } from 'react';
import {Login} from '../Login/Login';
import {Link} from 'react-router-dom';

export function HomePage() {

  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  }


  return (
    <div>
      {!user ? (
        <div>
          <ul>
          <li>Tópico 1</li>
          <li>Tópico 2</li>
          <li>Tópico 3</li>
          <li>Tópico 4</li>
          <li>Tópico 5</li>
        </ul>
        <Link to='/login'>Faça login para acessar mais tópicos</Link>
        <Login onLogin={handleLogin}/>
        </div>
        
      ) : (
        <div>
          <h1>Welcome, {user}!</h1>
        </div>
      )}
    </div>
  );
}