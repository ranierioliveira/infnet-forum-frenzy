import styles from "./AppBar.module.css";
import { MdMenu} from "react-icons/md";
import {Link} from 'react-router-dom';

export function AppBar(){
  return (
      <header className={styles['app-bar']}>
        <InfnetLogo/>
        <LinksCabecalho/>
        <Contacts/>
      </header>
  )
}

function InfnetLogo(){
  return (
    <Link to='/' className={styles['infnet-logo']}>
      <img src='infnet.png' className={styles['infnet-logo-imagem']}/>
      <span>
        Infnet Forum Frenzy
      </span>
    </Link>
  ) 
}


function Contacts(){
  return(
    <div className={styles['contatos']}>
      <Link to='/login'>
        Login
      </Link>
      <span>
       <img src='git-logo.png' className={styles['git-logo']}/>
      </span>
      <span >
        <MdMenu className={styles['md-menu']} />
      </span>
    </div>
  )
}

function LinksCabecalho(){
  return(
    <div className={styles['links-cabecalho']}>
      <span>
        ACESSAR BLOG
      </span>
      <span>
        REALIZAR CONTATO
      </span>
    </div>
  )
}