import { Link } from 'react-router-dom';
import PostListPage from '../../components/PostListPage';
// import PostInsert from '../../components/PostInsert';
import LoggedPage from '../LoggedPage/LoggedPage';
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
        <LoggedPage user={user} onNewTopic={handleNewTopic} key={updateKey}/>
      )}
    </div>
  );
}
