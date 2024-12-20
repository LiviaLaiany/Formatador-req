//BACKEND
import api from '../services/api.js'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

//OUTROS
//RESPONSIVO //barra branca a direita
import '../css/Cadastro.css';
import logo from "../imagens/FDR.svg"; 
import fundo1 from "../imagens/fundo.svg";
import fundo2 from "../imagens/fundo2.svg";
export default function Cadastro(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        try {
            const response = await api.post('/register', {name, email, password})
            .then(async (res) => {
                if (res.data.status) {
                    const responseLogin = await api.post('/login', {email, password});
                    localStorage.setItem('token', responseLogin.data.token);
                    navigate('/formatador');
                }
            });
        } catch (err) {
            alert('Falha no registro, tente novamente.' + err);
        }
    }

    return(
        <form onSubmit={handleRegister}>
            <div className="row  h-100 ">
                <div className="col-sm h-auto justify-content-center d-flex" id="back">
                    <img src={fundo2} className="position-fixed fixed-bottom img-fluid w-25 d-none d-sm-block" alt="fundo"></img>
                    <img src={fundo1} className="position-fixed fixed-top img-fluid w-25 d-none d-sm-block"  alt="fundo"></img>
                    <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid w-50 d-none d-sm-block" alt="logo"></img>
                </div>
                <div className="col-sm vh-100 pt-5 d-flex justify-content-center align-items-center" id="back2">
                    <div className="text-center" style={{ width: '100%', maxWidth: '400px' }}>
                        <div className="d-flex mb-5 pt-2 justify-content-center align-items-center w-100 fs-1 fw-bold rounded text-center mx-auto" id="nome" style={{ minHeight: '50px' }}>
                            <p>Cadastre-se</p>
                        </div>
                    
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <input  placeholder="Nome" className="form-control mt-2 w-100" value={name} onChange={e => setName(e.target.value)}/>
                            <input id="email" placeholder="exemplo@dominio.com" className="form-control mt-2 w-100" value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type='password' id="senha" placeholder="Senha" className="form-control mt-2 w-100" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button className="btn btn-primary w-25 rounded-pill m-3" id="enviar" type='submit'>Enviar</button>

                        <div className="mt-5 d-flex align-items-center justify-content-center">
                            <Link to='/'>
                                <button className='btn w-100 rounded-pill' id="volte">Página inicial</button>
                            </Link>
                            <Link to='/login'>
                                <button className='btn w-100 rounded-pill m-3' id="volte">Login</button>
                            </Link>
                        </div>
                        <div className='align-items-center d-flex justify-content-center'>
                            <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid d-block d-sm-none w-50 " alt="logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}