import {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css';

// eslint-disable-next-line react/prop-types
export function Login({ onLogin }){
  
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate(); //instância p/ o navigate
  

  const handleLogin = (e) =>{
    e.preventDefault();
    if(userName && password){
      onLogin(userName);
      navigate('/logged')
    }
  }

  return(
    <div className={styles['container']}>
      <form className={styles['formulario']} onSubmit={handleLogin}>
        <h1 className={styles['login-titulo']}>Login</h1>
        <p>Digite seus dados de acesso no campo abaixo:</p>
        <div className={styles['campo-info']}>
          <div><label>User</label></div>
          <input className={`${styles['input']} rounded-md border-gray-300`} type='text' placeholder='Digite seu usuário' data-cy='username' onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className={styles['campo-info']}>
          <div><label>Senha</label></div>

          <input className={`${styles['input']} rounded-md border-gray-300`} placeholder='Digite sua senha' type='password' data-cy='password' onChange={e => setPassword(e.target.value)}/>
        </div>
        <span className={styles['recuperacao-senha']}>Esqueci minha senha</span>
        <button className={styles['botao-contato']} type="submit" data-cy='submit'>Login</button>
      </form>
    </div>
    
  )
}

