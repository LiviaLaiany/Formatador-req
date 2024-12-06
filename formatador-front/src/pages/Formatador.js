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
    const limitarTexto = (texto, maxLength) => {
        return texto.length > maxLength ? texto.substring(0, maxLength) + '...' : texto;
    }
    // function handleMouseEnter(id) {
    //     const tooltip = document.getElementById(`tooltip-${id}`);
    //     tooltip.style.display = 'block'; // Exibe o tooltip imediatamente
    //   }
      
    //   function handleMouseLeave() {
    //     const tooltips = document.querySelectorAll('.tooltip-custom');
    //     tooltips.forEach((tooltip) => {
    //       tooltip.style.display = 'none'; // Esconde o tooltip
    //     });
    //   }
      
    return (
        <div className=" " style={{ backgroundColor:'#2CAEEF' }}>
            <Nav text="Formatador" />
            <div className='d-flex min-vh-100 flex-column align-items-center justify-content-center'>
                <div style={{ }} className="pb-3  row container rounded my-5  ">
                    <div className=" card vh-auto shadow-sm p-4 bg-light rounded  col-5 " id='projeto'>
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
                                        <strong className='fs-2 justify-content-center text-center align-items-center d-flex'>Meus Projetos </strong>
                                    </div>
                                    
                                    <div className='h-auto row d-flex align-items-center flex-column '>{projetos.map((projeto) => (
                                        <div className="container my-3 d-flex justify-content-center flex-column align-items-center">
                                            <div className="row container w-100 justify-content-center align-items-center">
                                                {/* Card que simula uma pastinha */}
                                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-items-center flex-column d-flex justify-content-center w-100">
                                                    <div className="card shadow-sm align-items-center pb-3 justify-content-center p-0 h-100 w-100">
                                                        {/* Aba da pastinha */}
                                                        <div className="folder-tab align-items-center justify-content-between d-flex w-100" id='barraAmarela'>
                                                            <div 
                                                                id='botaoProjeto'
                                                                key={projeto.id}
                                                                title='Visualizar Projeto'
                                                                className="text-center text-light d-flex align-items-center justify-content-start m-2 w-100"
                                                                onClick={() => handleAbrirProjeto(projeto.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            > 
                                                                <span 
                                                                    className="text-truncate" 
                                                                    style={{ display: 'block', maxWidth: '100%', fontSize: '1rem' }}
                                                                >
                                                                    {projeto.nome}
                                                                </span>
                                                            </div>

                                                            <i
                                                                className="bi bi-folder text-light rounded"
                                                                onClick={() => toggleButtons(projeto.id)}
                                                                style={{ cursor: 'pointer' }}
                                                                title='Editar ou Excluir'
                                                            ></i>  
                                                        </div>

                                                        <div className='row'>
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
                    <div className="container h-auto col-5 card shadow-sm rounded bg-light p-4 " id='modelo'>
                       
                        <div className="text-center" >
                            <button
                                onClick={handleCriarModelo}
                                className="btn fw-bold btn-primary"
                            >
                                Criar Novo Modelo
                            </button>
                        </div>
                        <strong className='fs-2 justify-content-center text-center align-items-center d-flex'>Meus Modelos </strong>
                        <div title='Visualizar Modelo' className="row h-auto d-flex  justify-content-center">
                            {modelos.map((modelo) => (
                                <div id='cardModelo'
                                key={modelo.id}
                                className="col-6 card card-modelo col-sm-3 bg-light d-flex align-items-center justify-content-center m-2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleAbrirModelo(modelo.id)}
                                >
                                <div className="flex-column align-items-center justify-content-center d-flex" >
                                    {/* <i className="align-items-end w-100 justify-content-end d-flex m-1 col-6 bi bi-file-earmark"></i> */}
                                    {/* Nome com limite de 20 caracteres */}
                                    <div className="w-auto fs-6 nome-limited" title={modelo.nome}>
                                        {limitarTexto(modelo.nome, 10)} {/* Limite de 20 caracteres */}
                                    </div>
                                    {/* Botão de excluir, apenas visível quando o mouse passa sobre o card */}
                                    {modelo.id !== 1 ? (
                                    <div className="btn-excluir">
                                        <button
                                        title='Apagar Modelo'
                                        key={modelo.id}
                                        className="btn btn-danger btn-sm d-block mt-3 align-self-center"
                                        onClick={(e) => handleExcluirModelo(modelo.id, e)}
                                        >
                                        Excluir
                                        </button>
                                    </div>
                                    ) : null}
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

