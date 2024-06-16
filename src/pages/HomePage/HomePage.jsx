import PostListPage from '../../components/PostListPage/PostListPage';
// import PostInsert from '../../components/PostInsert';
import LoggedPage from '../LoggedPage/LoggedPage';
import { useState } from 'react';
import styles from './HomePage.module.css';

export function HomePage({ user }) {

  const [updateKey, setUpdateKey] = useState(0);

  const handleNewTopic = () => {
    setUpdateKey(prevKey => prevKey + 1); 
  };

  return (

    <div className={styles['container']}>
      {!user ? (
        <div>
          <PostListPage action="limit" key={updateKey} />
  
        </div>
      ) : (
        <LoggedPage user={user} onNewTopic={handleNewTopic} key={updateKey}/>
      )}
    </div>
  );
}
