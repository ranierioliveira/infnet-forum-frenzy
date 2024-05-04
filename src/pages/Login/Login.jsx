import React, {useState} from 'react';
import styles from './Login.module.css';

export function Login({ onLogin }){
  
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  

  const handleLogin = (e) =>{
    e.preventDefault();
    if(userName && password){
      onLogin(userName);
    }
  }

  return(
    <div className={styles['container']}>
      <form className={styles['formulario']} onSubmit={handleLogin}>
        <h1 className={styles['login-titulo']}>Login</h1>
        <p>Digite seus dados de acesso no campo abaixo:</p>
        <div className={styles['campo-info']}>
          <div><label>Email</label></div>
          <input className={`${styles['input']} rounded-md border-gray-300`} type='text' placeholder='Digite seu e-mail' onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className={styles['campo-info']}>
          <div><label>Senha</label></div>

          <input className={`${styles['input']} rounded-md border-gray-300`} placeholder='Digite sua senha' type='password' onChange={e => setPassword(e.target.value)}/>
        </div>
        <span className={styles['recuperacao-senha']}>Esqueci minha senha</span>
        <button className={styles['botao-contato']} type="submit">Login</button>
      </form>
    </div>
    
  )
}

