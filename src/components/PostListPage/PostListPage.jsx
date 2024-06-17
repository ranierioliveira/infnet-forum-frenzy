import { useState, useEffect } from 'react';
import PostList from '../PostList';
import styles from './PostListPage.module.css';
import { Link } from 'react-router-dom';

export default function PostListPage({ action }) {
  const [topicos, setTopicos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(null);

  const baseUrl = "https://infnet-forum-frenzy-default-rtdb.asia-southeast1.firebasedatabase.app";

  function convertData(data) {
    const ids = Object.keys(data);
    let topicos = Object.values(data);
    return topicos.map((topico, index) => {
      return {
        id: ids[index],
        ...topico,
      };
    });
  }

  useEffect(() => {
    fetch(`${baseUrl}/topicos.json`)
      .then(async (resp) => {
        const respTopicos = await resp.json();
        let convertedTopicos = convertData(respTopicos);
        if (action === "limit") {
          convertedTopicos = convertedTopicos.slice(0, 3);
        }
        setTopicos(convertedTopicos);
      })
      .catch((error) => setMessage(error.message))
      .finally(() => setIsLoading(false));
  }, [action]);

  return (
    <div className={styles['container']}>
      {isLoading && <p>Carregando...</p>}

      {message && <p>{message}</p>}

      {topicos && (
        <div>
          {action && <h1 className={styles['title']}>Tópicos em destaque</h1>}
          <PostList topicos={topicos} />
        </div>
      )}

      
      {action && <Link to='/login' className={styles['link-login']} >Faça login para acessar mais tópicos</Link>}

    </div>
  );
}
