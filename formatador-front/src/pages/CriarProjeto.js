import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import '../css/CriarProjeto.css';
import TutorialImage from '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
//RESPONSIVO E PRONTO
export default function CriarProjeto() {
    const [token] = useState(localStorage.getItem('token'));
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    useEffect(()  => {
        if(!token) {
            navigate('/')
        }
    })

    const handleCriarProjeto = (e) => {
        e.preventDefault();

        if (!nome.trim()) {
            alert('O nome do projeto é obrigatório.');
            return;
        }

        api.post (
            '/v1/projetos',
            {nome, descricao},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(() => {
            alert('Projeto criado com sucesso!');
            navigate('/formatador');
        }).catch((error) => {
            if (error.response?.status === 401 || error.response?.status === 498) {
                localStorage.clear();
                navigate('/');
            } else {
                alert('Erro ao criar projeto: ' + error.message);
            }
        });
    }


    return (
        <div>
           <Nav text="Formatador" />
            {/* RESPONSIVO */}
            <div id="divGrande" className="container-fluid p-4 pb-sm-4 vh-100 p-0 ">
                <div id="h2" className="container-fluid  d-flex p-0">
                    <h2 className="text-center fs-2">Criar Novo Projeto</h2>
                </div>
                    <form id="forms" className="mt-4 container rounded p-5  bg-light" onSubmit={handleCriarProjeto}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label text-center text-sm-start">Nome do Projeto</label>
                            <input type="text" className="form-control text-dark" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do projeto" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label text-center text-sm-start">Descrição do Projeto</label>
                            <textarea className="form-control text-dark" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite uma breve descrição do projeto" rows="4"></textarea>
                        </div>
                        <div className="align-items-center justify-content-center d-flex">
                            <button type="submit" className="btn  w-50 " id="botao">
                                Criar Projeto
                            </button>
                        </div>
                        <div className="align-items-center justify-content-center d-flex" onClick={() => navigate('/formatador')}>
                            <button type="submit" className="btn  min-w-25  m-4" id="botao">
                                Voltar
                            </button>
                        </div>
                    </form>
                
            </div>
            <Rodape/>
            
        </div>
    )
}