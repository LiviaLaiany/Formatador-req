import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js'
import Formatador from './pages/Formatador.js'
import Cadastro from './pages/Cadastro.js'
import Tutorial from './pages/Tutorial.js'
import Paginainicial from './pages/Paginainicial.js';
import CriarProjeto from './pages/CriarProjeto.js';
import ShowProjeto from './pages/ShowProjeto.js';
import ShowModelo from './pages/ShowModelo.js';
import EditarProjeto from './pages/EditarProjeto.js';
import CriarModeloPersonalizado from './pages/CriarModeloPersonalizado.js';
import CriarDocumento from './pages/CriarDocumento.js';
import ShowDocumento from './pages/ShowDocumento.js';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/formatador' element={<Formatador />}/>
        <Route path='/projetos/criar' element={<CriarProjeto />}/>
        <Route path='/projetos/:id' element={<ShowProjeto />}/>
        <Route path='/projetos/editar/:id' element={<EditarProjeto />}/>
        <Route path='/tutorial' element={<Tutorial />}/>
        <Route path='/' element={<Paginainicial />}/>
        <Route path='/modelos/:id' element={<ShowModelo />}/>
        <Route path="/modelos/criar" element={<CriarModeloPersonalizado />}/>
        <Route path="/documentos/criar/:pro_id/:mod_id" element={<CriarDocumento />}/>
        <Route path='/documentos/:id' element={<ShowDocumento />}/>
      </Routes>
    </BrowserRouter>
  );
}