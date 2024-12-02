import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';


export default function ModeloDetalhes() {
    const { id } = useParams();
    const [modelo, setModelo] = useState(null);
    const [token] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/modelos/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setModelo(response.data);
            })
            .catch((error) => {
                if (error.response?.status === 401 || error.response?.status === 498) {
                    localStorage.clear();
                    navigate('/');
                } else {
                    alert('Erro ao carregar o modelo: ' + error.message);
                }
            });
    }, [id, token, navigate]);

    if (!modelo) {
        return <p>Carregando...</p>;
    }

    const renderCapa = (capa) =>
        capa.map((campo, index) => (
            <div key={index} className="border p-3 mb-2 bg-light">
                <strong>{campo.titulo}</strong>
                <p>{campo.descricao || 'Sem descrição disponível.'}</p>
                {campo.obrigatorio && <span className="badge bg-danger">Obrigatório</span>}
            </div>
        ));

    const renderConteudo = (conteudo) =>
        conteudo.map((secao, index) => (
            <div key={index} className="border p-3 mb-2 bg-light">
                <strong>{secao.titulo}</strong>
                <p>{secao.descricao || 'Sem descrição disponível.'}</p>
                {secao.obrigatorio && <span className="badge bg-danger">Obrigatório</span>}
                {secao.componentes && (
                    <div className="mt-2">
                        <strong>Componentes:</strong>
                        {secao.componentes.map((componente, compIndex) => (
                            <div key={compIndex} className="border p-2 my-1 bg-white">
                                <strong>{componente.titulo}</strong>
                                <p>{componente.descricao || 'Sem descrição disponível.'}</p>
                                {componente.obrigatorio && <span className="badge bg-danger">Obrigatório</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ));

    return (
        <div>
            <Nav text="Detalhes do Modelo" />
            <div className="container mt-4">
                <h2 className="text-center mb-4">{modelo.nome}</h2>

                <h4>Capa</h4>
                <div>{modelo.mod_json.capa.length > 0 ? renderCapa(modelo.mod_json.capa) : <p>Sem dados na capa.</p>}</div>

                <h4 className="mt-4">Conteúdo</h4>
                <div>
                    {modelo.mod_json.conteudo.length > 0 ? renderConteudo(modelo.mod_json.conteudo) : <p>Sem dados no conteúdo.</p>}
                </div>

                <button className="btn btn-primary mt-4" onClick={() => navigate('/formatador')}>
                    Voltar
                </button>
            </div>
        </div>
    );
}
