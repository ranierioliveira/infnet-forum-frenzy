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
    <div style={{
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px'
    }}>
      <img src='infnet.png' style={{
        width: '36px',
        height: '36px'
      }}/>
      <span>
        Infnet Forum Frenzy
      </span>
    </div>
  ) 
}


function Contacts(){
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'end', 
      gap: '24px',
      flexGrow: '1',
    }}>
      <span>
        Login
      </span>
      <span>
       <img src='git-logo.png' style={{
        borderRadius: '50%',
        width: '24px',
        height: '24px'
       }}/>
      </span>
      <span >
        <MdMenu style={{
          width: '24px',
          height: '24px',
        }} />
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