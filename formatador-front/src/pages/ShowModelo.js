import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import "../css/ShowModelo.css";
import Rodape from './Rodape.js';
//RESPONSIVO E PRONTO
export default function ShowModelo() {
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
        <div className='show'>
            <Nav text="Formatador" />
            <h2 className="text-center my-4  fs-2">{modelo.nome}</h2>
            <div className="container card bg-light  text-dark rounded  mt-4 ">
                <h4 className=' fs-2  mt-4 card-header color'>Capa</h4>
                <div className='py-3 card-body rounded'>{modelo.mod_json.capa.length > 0 ? renderCapa(modelo.mod_json.capa) : <p>Sem dados na capa.</p>}</div>
            </div>
            <div className='container bg-light card  text-dark rounded  mt-4 mb-4'>
                <h4 className="mt-4 card-header fs-2">Conteúdo</h4>
                <div className='rounded card-body box-2'>
                    {modelo.mod_json.conteudo.length > 0 ? renderConteudo(modelo.mod_json.conteudo) : <p>Sem dados no conteúdo.</p>}
                </div>
            <div/>
                                    
                <div className="align-items-center justify-content-center d-flex" onClick={() => navigate('/formatador')}>
                        <button type="submit" className="btn  w-25  m-4" id="botao">
                            Voltar
                        </button>
                </div>
            </div>
            <Rodape/>
        </div>
    );
}
