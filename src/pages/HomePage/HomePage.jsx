import { Link } from 'react-router-dom';
import PostListPage from '../../components/PostListPage';
import PostInsert from '../../components/PostInsert';
import { useState } from 'react';

export function HomePage({ user }) {

  const [updateKey, setUpdateKey] = useState(0);

  const handleNewTopic = () => {
    setUpdateKey(prevKey => prevKey + 1); 
  };

  return (

    <div>
      {!user ? (
        <div>
          <PostListPage action="limit" key={updateKey} />
          <Link to='/login' style={{ textDecoration: "underline" }}>Faça login para acessar mais tópicos</Link>
        </div>
      ) : (
        <div>
          <h1>Bem vindo(a) {user}!</h1>
          <PostInsert user={user} onNewTopic={handleNewTopic} />
          <PostListPage key={updateKey}/>
        </div>
      )}
    </div>
  );
}
