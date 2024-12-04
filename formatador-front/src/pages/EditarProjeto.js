import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import '../css/CriarProjeto.css';
import TutorialImage from '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
//FALTA RESPONSIVO 

export default function EditarProjeto() {
    const {id} = useParams();
    const [token] = useState(localStorage.getItem('token'));
    const [projeto, setProjeto] = useState(null);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/projetos/${id}`, {
            headers: { Authorization: `Bearer ${token}`}, 
        }).then((response) => {
            setProjeto(response.data)
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
        }).catch((err) => {
            alert('Erro ao carregar projeto: '+err.message)
        });
    }, [id, token]);

    const handleSubmit = (e) => {
        e.preventDefault();

        api.put(`/v1/projetos/${id}`, {nome, descricao}, {
            headers: { Authorization: `Bearer ${token}`}
        }).then((response) => {
            alert('Projeto editado com sucesso!');
            navigate(`/projetos/${id}`);
        }).catch((err) => {
            alert('Erro ao atualizar projeto: '+err.message);
        })

    }

    if(!projeto) {
        return <p>Carregando...</p>
    }

    return (
        <div>
           <Nav text="Formatador" />

            <div id="divGrande" className="container-fluid vh-100 p-0 ">
                <div id="h2" className="container-fluid d-flex p-0">
                    <h2 className="text-center fs-2">Editar Projeto</h2>
                </div>           
                <form id="forms" className="mt-4 container rounded p-5 w-50 bg-light" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome do Projeto</label>
                        <input type="text" className="form-control text-dark" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do projeto" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição do Projeto</label>
                        <textarea className="form-control text-dark" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite uma breve descrição do projeto" rows="4"></textarea>
                    </div>
                    <div className="align-items-center justify-content-center d-flex">
                        <button type="submit" className="btn  w-50 " id="botao">
                            Editar Projeto
                        </button>
                    </div>

                </form>
            </div>
            <Rodape/>
        </div>
    );
}