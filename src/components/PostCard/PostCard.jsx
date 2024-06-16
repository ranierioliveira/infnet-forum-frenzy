import styles from './PostCard.module.css';


export default function PostCard({ topico }) {
  return (
      <div className={styles['container']}>
          
        <h1 className={styles['title']}>{topico.titulo}</h1>


        <p className={styles['description']}>{topico.descricao}</p>

            <p className={styles['info']}>
                <span> {topico.dataPublicacao}, </span>
                <span>  {topico.palavrasChave}</span><br></br>
                <span className={styles['info']}> Discussão aberta por: {topico.nomeUsuario} - likes: {topico.curtidas} | deslikes: {topico.descurtidas}</span>
            </p>
          
      </div>
  );
}

