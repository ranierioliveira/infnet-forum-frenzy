import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function HomePage( { user } ) {


  return (
    <div>
      {!user ? (
        <div>
          <ul>
          <li>Tópico 1</li>
          <li>Tópico 2</li>
          <li>Tópico 3</li>
          <li>Tópico 4</li>
          <li>Tópico 5</li>
        </ul>
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