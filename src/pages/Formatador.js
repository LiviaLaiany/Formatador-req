import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import '../css/Formatador.css';
import mais from '../imagens/mais.svg';

export default function Formatador() {
    const [token] = useState(localStorage.getItem('token'));
    const [projetos, setProjetos] = useState([]);
    const [modelos, setModelos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/v1/projetos', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => setProjetos(response.data || []))
            .catch((error) => {
                if (error.response?.status === 401 || error.response?.status === 498) {
                    localStorage.clear();
                    navigate('/');
                } else {
                    alert('Erro ao carregar projetos: ' + error.message);
                }
            });

        api.get('/v1/modelos', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => setModelos(response.data || []))
            .catch((error) => {
                if (error.response?.status === 401 || error.response?.status === 498) {
                    localStorage.clear();
                    navigate('/');
                } else {
                    alert('Erro ao carregar modelos: ' + error.message);
                }
            });
    }, [token, navigate]);

    const handleCriarProjeto = () => {
        navigate('/projetos/criar');
    };

    const handleAbrirModelo = (id) => {
        navigate(`/modelos/${id}`)
    }

    const handleCriarModelo = () => {
        navigate('/modelos/criar');
    };

    const handleAbrirProjeto = (id) => {
        navigate(`/projetos/${id}`);
    };

    return (
        <div>
            <Nav text="Formatador" />
            <div style={{ backgroundColor: '#ebebeb', paddingTop: '10%' }} className="pb-3">
                <div className="d-flex justify-content-between p-4">
                    {/* <span className="fw-bold"><a href=''>Criar novo documento</a></span>*/}                            
                    <button onClick={handleCriarProjeto} className="btn fw-bold btn-primary">
                                Criar Novo Projeto
                    </button>
                    <span className="fw-bold">Galeria de modelos</span>
                </div>

                <div className="container">
                    {projetos?.length === 0 ? (
                        <div className="text-center">
                            <p>Nenhum projeto encontrado.</p>
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

                <div className="container mt-5">
                    <h3 className="text-center">Meus Modelos</h3>
                    <div className="row d-flex justify-content-center">
                        {modelos.map((modelo) => (
                            <div
                                key={modelo.id}
                                className="col-3 col-sm-1 border border-dark bg-light d-flex align-items-center justify-content-center m-2"
                                style={{ height: '150px', cursor: 'pointer' }}
                                onClick={() => handleAbrirModelo(modelo.id)}
                            >
                                <div className="text-center">{modelo.nome}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button
                            onClick={handleCriarModelo}
                            className="btn btn-primary"
                        >
                            Criar Novo Modelo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}