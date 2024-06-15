import PostListPage from '../../components/PostListPage';
import PostInsert from '../../components/PostInsert';

export default function LoggedPage({ user, handleNewTopic, updateKey} ){
    


    return(
        <div>
          <h1 data-cy='titulo'>Bem vindo(a) {user}!</h1>
          <PostInsert user={user} handleNewTopic={handleNewTopic} />
          <PostListPage key={updateKey}/>
        </div>
    )
}