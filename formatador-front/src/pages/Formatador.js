import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import './Formatador.css';
import mais from '../imagens/mais.svg';

export default function Formatador() {
    const [token] = useState(localStorage.getItem('token'));
    const [projetos, setProjetos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/v1/projetos', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setProjetos(response.data || []);
            })
            .catch((error) => {
                if (error.response?.status === 401 || error.response?.status === 498) {
                    localStorage.clear();
                    navigate('/');
                } else {
                    alert('Erro ao carregar projetos: ' + error.message);
                }
            });
    }, [token, navigate]);

    const handleCriarProjeto = () => {
        navigate('/projetos/criar');
    };

    const handleAbrirProjeto = (id) => {
        navigate(`/projetos/${id}`);
    };

    return (
        <div>
            <Nav text="Formatador" />
            <div style={{ backgroundColor: '#ebebeb', paddingTop: '10%' }} className="pb-3">
                <div className="d-flex justify-content-between p-4">
                    <span className="fw-bold">Criar novo documento</span>
                    <span className="fw-bold">Galeria de modelos</span>
                </div>

                <div className="container">
                    {projetos?.length === 0 ? (
                        <div className="text-center">
                            <p>Nenhum projeto encontrado.</p>
                            <button
                                onClick={handleCriarProjeto}
                                className="btn btn-primary"
                                style={{ marginTop: '20px' }}
                            >
                                Criar Novo Projeto
                            </button>
                        </div>
                    ) : (
                        <div className="row d-flex justify-content-center w-100">
                            {projetos.map((projeto) => (
                                <div
                                    key={projeto.id}
                                    className="col-3 col-sm-1 border border-dark bg-light d-flex align-items-center justify-content-center m-2"
                                    onClick={() => handleAbrirProjeto(projeto.id)}
                                    style={{ cursor: 'pointer', height: '150px' }}
                                >
                                    <div className="text-center">{projeto.nome}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {projetos.length > 0 && (
                    <div className="d-flex justify-content-center p-4">
                        <div
                            id="cria"
                            className="col-3 col-sm-1 border border-dark bg-light d-flex align-items-center justify-content-center"
                            style={{ cursor: 'pointer' }}
                            onClick={handleCriarProjeto}
                        >
                            <img src={mais} alt="Criar Novo Projeto" />
                        </div>
                    </div>
                )}
            </div>

            <form>
                <div className="row d-flex justify-content-between w-100">
                    <div id="Documentos" className="rounded m-5 col-5" style={{ height: '40%' }}>
                        <span style={{ backgroundColor: '#00617D' }} className="rounded text-light d-block text-center my-2 w-25 fs-5">
                            Meus Documentos
                        </span>
                        <div className="d-flex justify-content-between" style={{ width: '550px', height: '250px' }}>
                            <div className="border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                            <div className="border border-dark my-3 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                            <div className="border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                        </div>
                    </div>

                    <div id="Modelos" className="rounded m-5 col-5" style={{ height: '40%' }}>
                        <span style={{ backgroundColor: '#99DBFB' }} className="rounded d-block text-center my-2 w-25 fs-5">
                            Meus Modelos
                        </span>
                        <div className="d-flex justify-content-between" style={{ width: '550px', height: '250px' }}>
                            <div className="border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                            <div className="border border-dark my-3 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                            <div className="border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75">
                                Modelo
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
