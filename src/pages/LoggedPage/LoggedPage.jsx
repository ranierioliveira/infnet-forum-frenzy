import PostListPage from '../../components/PostListPage/PostListPage';
import PostInsert from '../../components/PostInsert/PostInsert';
import styles from './LoggedPage.module.css';

export default function LoggedPage({ user, handleNewTopic, updateKey} ){
    


    return(
        <div className={styles['container']}>
          <h1 data-cy='titulo' className={styles['title']}>Bem vindo(a) {user}!</h1>
          <PostInsert user={user} handleNewTopic={handleNewTopic} />
          <PostListPage key={updateKey}/>
        </div>
    )
}