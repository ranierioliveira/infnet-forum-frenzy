import {Link} from 'react-router-dom';
import PostListPage from '../../components/PostListPage';

// eslint-disable-next-line react/prop-types
export function HomePage( { user } ) {


  return (
    <div>
      {!user ? (
        <div>
          <PostListPage/>
        <Link to='/login'>Faça login para acessar mais tópicos</Link>
        </div>
        
      ) : (
        <div>
          <h1>Welcome, {user}!</h1>
        </div>
      )}
    </div>
  );
}