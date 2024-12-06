import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import '../css/Formatador.css';
import mais from '../imagens/mais.svg';
import "bootstrap-icons/font/bootstrap-icons.css";

//FALTA RESPONSIVO E TUDO

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

    const handleAbrirProjeto = (id) => {
        navigate(`/projetos/${id}`);
    }

    const handleCriarProjeto = () => {
        navigate('/projetos/criar');
    }

    const handleEditarProjeto = (id, e) => {
        e.stopPropagation();

        navigate(`/projetos/editar/${id}`);
    }

    const handleExcluirProjeto = (id, e) => {
        e.stopPropagation()

        if (window.confirm("Tem certeza que deseja deletar projeto?")) {
            
            api.delete(`v1/projetos/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then( () => {
                alert('Projeto deletado com sucesso');
                navigate(0);
            }
            ).catch((err) => {
                alert('Erro ao deletar projeto: ' + err.response.data.message);
            })

        }
    }

    const handleAbrirModelo = (id) => {
        navigate(`/modelos/${id}`);
    }

    const handleCriarModelo = () => {
        navigate('/modelos/criar');
    }

    const handleExcluirModelo = (id, e) => {
        e.stopPropagation()

        if (window.confirm("Tem certeza que deseja deletar modelo?")) {
            
            api.delete(`v1/modelos/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then( () => {
                alert('Modelo deletado com sucesso');
                navigate(0);
            }
            ).catch((err) => {
                alert('Erro ao deletar modelo: ' + err.response.data.message);
            })

        }
    }
    const [showButtons, setShowButtons] = useState({});
    const toggleButtons = (id) => {
        setShowButtons((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    }
    return (
        <div className=" " style={{ backgroundColor:'#2CAEEF' }}>
            <Nav text="Formatador" />
            <div className='d-flex h-100 align-items-center justify-content-center'>
                <div style={{ }} className="pb-3 vh-100 row container rounded my-5  ">
                    <div className=" p-4 bg-light rounded  col-5 " id='projeto'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={handleCriarProjeto} className="btn shadow-sm fw-bold  align-self-center min-w-50 w-sm-50    btn-primary " >
                                Criar Novo Projeto
                            </button>
                        </div>
                        <div className=" d-flex justify-content-center align-items-center h-auto w-100 ">
                            {projetos?.length === 0 ? (
                                <div className="text-center">
                                    <p>Nenhum projeto encontrado.</p>
                                    {/* <button
                                        onClick= {handleCriarProjeto}
                                        className="btn btn-primary"
                                        style={{ marginTop: '20px' }}
                                    >
                                        Criar Novo Projeto
                                    </button> */}
                                </div>
                            ) : (
                                <div className="row d-flex justify-content-center h-100 w-100" id='card projeto'>
                                    <div className='row' id='linha1'>
                                        <strong className='fs-2 justify-content-center text-center align-items-center d-flex'>Meus projetos </strong>
                                    </div>
                                    
                                    <div className='h-auto row d-flex align-items-center flex-column '>{projetos.map((projeto) => (
                                        <div className="container my-3 d-flex justify-content-center flex-column align-items-center">
                                            <div className="row w-100 justify-content-center align-items-center">
                                                {/* Card que simula uma pastinha */}
                                                <div  className="col-md-3 align-items-center flex-column d-flex justify-content-center w-100 ">
                                                    <div className="card shadow-sm align-items-center justify-content-center p-0 h-100 w-100 ">
                                                        {/* Aba da pastinha */}
                                                        <div className="folder-tab align-items-center justify-content-between d-flex w-100" id='barraAmarela'>
                                                            <div id='botaoProjeto'
                                                                key={projeto.id}
                                                                className="col-3 col-sm-1  text-light w-25 h-auto  d-flex align-items-center justify-content-center m-2"
                                                                onClick={() => handleAbrirProjeto(projeto.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            > 
                                                            {projeto.nome }     
                                                            </div>
                                                            <i
                                                                    className="bi bi-folder text-light rounded"
                                                                    onClick={() => toggleButtons(projeto.id)}
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>  
                                                        </div>
                                                        <div className='row' >
                                                            <div>
                                                                {projeto?.descricao}
                                                            </div>
                                                        </div>
                                                        {showButtons[projeto.id] && (
                                                                <div className="card-body text-center">
                                                                    <div className="d-flex flex-column align-items-center justify-content-center h-100 fs-5">
                                                                        
                                                                        <div className="row justify-content-center">
                                                                            <div className="col-6">
                                                                                <button
                                                                                    className="btn btn-danger btn-sm"
                                                                                    onClick={(e) => handleExcluirProjeto(projeto.id, e)}
                                                                                >
                                                                                    Excluir
                                                                                </button>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <button
                                                                                    className="btn btn-primary btn-sm"
                                                                                    onClick={(e) => handleEditarProjeto(projeto.id, e)}
                                                                                >
                                                                                    Editar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        {/* <div className="card-body text-center">    
                                                            <div className="text-center align-items-center justify-content-center h-100 fs-5">
                                                                <div className='row'>
                                                                    <div>
                                                                        {projeto?.descricao}
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-6'>
                                                                        <button key={projeto.id} className='btn btn-danger btn-sm' onClick={(e) => handleExcluirProjeto(projeto.id, e)}>
                                                                            Excluir
                                                                        </button>                                                        
                                                                    </div>
                                                                    <div className='col-6'>
                                                                        <button key={projeto.id} className='btn btn-primary btn-sm' onClick={(e) => handleEditarProjeto(projeto.id, e)}>
                                                                            Editar
                                                                        </button>   
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                            
                                    ))}
                                    </div>
                            </div>
                            )}
                        </div>
                    </div> 
                    <div className='col-2'></div>          
                    <div className="container col-5  rounded bg-light " id='modelo'>
                       
                        <div className="text-center mt-4 " >
                            <button
                                onClick={handleCriarModelo}
                                className="btn fw-bold btn-primary"
                            >
                                Criar Novo Modelo
                            </button>
                        </div>
                        <h3 className="text-center mt-5 fs-2">Meus Modelos</h3>
                        <div className="row d-flex justify-content-center">
                            {modelos.map((modelo) => (
                                <div
                                    key={modelo.id}
                                    className="col-3 col-sm-3 border border-dark bg-light d-flex align-items-center justify-content-center m-2"
                                    style={{cursor: 'pointer' }}
                                    onClick={() => handleAbrirModelo(modelo.id)}
                                >
                                    <div className="text-center">
                                        {modelo.nome}
                                        {
                                            modelo.id != 1 ? 
                                                (<button key={modelo.id} className='btn btn-danger btn-sm d-block mt-3 align-self-center' onClick={(e) => handleExcluirModelo(modelo.id, e)}>
                                                    Excluir
                                                </button>
                                                )
                                            : (<></>)
                                        }

                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>

            </div>
            
            <Rodape/>
        </div>
    );
}

