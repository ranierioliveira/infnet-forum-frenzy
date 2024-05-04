import './App.css';
import { AppBar } from './pages/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import { Login }  from './pages/Login/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "@fontsource/roboto";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
