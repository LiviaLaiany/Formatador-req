import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js'
import Formatador from './pages/Formatador.js'
import Cadastro from './pages/Cadastro.js'
import Tutorial from './pages/Tutorial.js'
import Paginainicial from './pages/Paginainicial.js';
import CriarProjeto from './pages/CriarProjeto.js';
import ShowProjeto from './pages/ShowProjeto.js';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/formatador' element={<Formatador />}/>
        <Route path='/projetos/criar' element={<CriarProjeto />}/>
        <Route path='/tutorial' element={<Tutorial />}/>
        <Route path='/paginainicial' element={<Paginainicial />}/>
        <Route path='/projetos/:id' element={<ShowProjeto />}/>
      </Routes>
    </BrowserRouter>
  );
}