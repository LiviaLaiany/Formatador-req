//BACKEND
import api from '../services/api.js'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
//RESPONSIVO 
//barra branca a direita
//IMAGENS E CSS
import '../css/Login.css';
import logo from "../imagens/FDR.svg"; 
import fundo1 from "../imagens/fundo.svg";
import fundo2 from "../imagens/fundo2.svg";
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', {email, password});
            localStorage.setItem('token', response.data.token);
            navigate('/formatador');
        } catch (err) {

            if (err.response) {
                console.error('Erro no servidor:', err.response.data);
                console.error('Código de status:', err.response.status);
                console.error('Headers:', err.response.headers);

                alert(`Erro no login: ${err.response.data.error}`);
            } else if (err.request) {
                console.error('Nenhuma resposta recebida:', err.request);
                alert('Erro no login: Nenhuma resposta do servidor. Verifique sua conexão ou tente novamente mais tarde.');
            } else {
                console.error('Erro na configuração:', err.message);
                alert(`Erro inesperado: ${err.message}`);
            }
        }
    }


    return(
        <form onSubmit={handleLogin}>
            <div className="row w-100 h-100 ">
                <div className="col-sm h-auto   justify-content-center d-flex" id="back">
                    <img src={fundo2} className="position-fixed fixed-bottom  img-fluid w-25 d-none d-sm-block" alt="fundo"></img>
                    <img src={fundo1} className="position-fixed fixed-top img-fluid w-25 d-none d-sm-block"  alt="fundo"></img>
                    <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid w-50 d-none d-sm-block" alt="logo"></img>
                </div>
                <div className="col-sm vh-100 pt-5 d-flex justify-content-center align-items-center" id="back2">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ maxWidth: '400px' }}>
                        <div className="d-flex mb-5 pt-2 justify-content-center align-items-center w-100 fs-1 fw-bold rounded text-center" id="nome" style={{ minHeight: '50px' }}>
                            <p>Login</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center w-100">
                            <input id="email" placeholder="exemplo@dominio.com" className="form-control mt-2 w-100" value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type='password' id="senha" placeholder="Senha" className="form-control mt-2 w-100" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="mt-5 d-flex align-items-center justify-content-center w-100">
                            <button className="btn btn-primary w-25 rounded-pill m-3" id="enviar" type='submit'>Enviar</button>
                            <Link to='/'>
                                <button className='btn w-30 rounded-pill' id="volte">Voltar para página inicial</button>
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