import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';

export default function CriarProjeto() {
    const [token] = useState(localStorage.getItem('token'));
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate;

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
        ).then((response) => {
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
            <div className="container mt-5">
                <h2 className="text-center">Criar Novo Projeto</h2>
                <form className="mt-4" onSubmit={handleCriarProjeto}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome do Projeto</label>
                        <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do projeto" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição do Projeto</label>
                        <textarea className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite uma breve descrição do projeto" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Criar Projeto
                    </button>
                </form>
            </div>
            <Rodape/>
        </div>
    )
}