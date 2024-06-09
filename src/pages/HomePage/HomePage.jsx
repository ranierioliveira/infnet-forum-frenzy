import {Link} from 'react-router-dom';
import PostListPage from '../../components/PostListPage';
import PostInsert from '../../components/PostInsert';

// eslint-disable-next-line react/prop-types
export function HomePage( { user } ) {


  return (
    <div>
      {!user ? (
        <div>
          <PostListPage action="limit"/>
        <Link to='/login' style={{textDecoration: "underline"}}>Faça login para acessar mais tópicos</Link>
        </div>
        
      ) : (
        <div>
          <h1>Bem vindo(a) {user}!</h1>
          <PostInsert user={user}/>
          <PostListPage/>
        </div>
      )}
    </div>
  );
}

