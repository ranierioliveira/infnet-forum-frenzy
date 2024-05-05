import './App.css';
import { AppBar } from './pages/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import { Login }  from './pages/Login/Login';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { Ranking  } from './pages/Ranking/Ranking';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "@fontsource/roboto";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
          <Route path='/meu-perfil' element={<MyProfile/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
