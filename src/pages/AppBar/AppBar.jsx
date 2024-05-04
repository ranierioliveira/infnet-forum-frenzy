import styles from "./AppBar.module.css";
import { MdMenu} from "react-icons/md";

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
    <div className={styles['infnet-logo']}>
      <img src='infnet.png' className={styles['infnet-logo-imagem']}/>
      <span>
        Infnet Forum Frenzy
      </span>
    </div>
  ) 
}


function Contacts(){
  return(
    <div className={styles['contatos']}>
      <span>
        Login
      </span>
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