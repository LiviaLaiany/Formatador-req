import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js'
import Formatador from './pages/Formatador.js'
import Cadastro from './pages/Cadastro.js'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/formatador' element={<Formatador />}/>
      </Routes>
    </BrowserRouter>
  );
}