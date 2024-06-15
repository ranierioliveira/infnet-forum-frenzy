import './App.css';
import { AppBar } from './pages/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import { Login }  from './pages/Login/Login';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { Ranking  } from './pages/Ranking/Ranking';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import "@fontsource/roboto";
import LoggedPage from './pages/LoggedPage/LoggedPage';

export default function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  }

  return (
    <BrowserRouter>
      <AppBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage user={user}/>} />
          <Route path='/login' element={<Login onLogin={handleLogin} />}/>
          <Route path='/meu-perfil' element={<MyProfile/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
          <Route path='/logged' element={<LoggedPage user={user}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
