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

        if (!token) {
            navigate('/');
        } else {
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
        }
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
            <div className='container d-flex flex-md-row min-vh-100 align-items-stretch justify-content-center gap-3'>
                <div style={{ }} className="pb-3  h-50 row container rounded my-5  ">
                    <div className="card  mx-auto vh-auto shadow-sm p-4 bg-light rounded col-12 col-md-5" id='projeto'>
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
                                    <strong className='fs-2 justify-content-center text-center align-items-center d-flex'>Meus Projetos </strong>
                                    <div className='h-auto w-100 w-md-auto row d-flex align-items-center flex-column '>{projetos.map((projeto) => (
                                        <div className="container w-100 w-md-auto p-0 my-3 d-flex justify-content-center flex-column align-items-center">
                                            <div className="row container w-100 w-md-auto p-0 p-md-0 justify-content-center align-items-center">
                                                {/* Card que simula uma pastinha */}
                                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0 p-md-auto align-items-center flex-column d-flex justify-content-center w-100">
                                                    <div className="card shadow-sm align-items-center pb-3 justify-content-center p-0 h-100 w-100">
                                                        {/* Aba da pastinha */}
                                                        <div className="folder-tab align-items-center justify-content-between d-flex w-100" id='barraAmarela'>
                                                            <div 
                                                                id='botaoProjeto'
                                                                key={projeto.id}
                                                                title='Visualizar Projeto'
                                                                className="text-center text-light d-flex align-items-center texto-limitado w-auto p-1 justify-content-start "
                                                                onClick={() => handleAbrirProjeto(projeto.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            > 
                                                                <span
                                                                    title={`Visualizar ${projeto.nome}`}
                                                                    className="text-truncate" 
                                                                    // style={{ display: 'block', maxWidth: '100%', fontSize: '1rem' }}
                                                                >
                                                                    {projeto.nome}
                                                                </span>
                                                            </div>

                                                            <i
                                                                className="bi bi-folder text-light p-1 rounded"
                                                                onClick={() => toggleButtons(projeto.id)}
                                                                style={{ cursor: 'pointer' }}
                                                                title={`Editar ou Excluir ${projeto.nome}`}
                                                            ></i>  
                                                        </div>

                                                        <div className='row'>
                                                            <div className='texto-fluido w-auto'>
                                                                {projeto?.descricao}
                                                            </div>
                                                        </div>

                                                        {showButtons[projeto.id] && (
                                                            <div className="card-body text-center">
                                                                <div className="d-flex flex-column align-items-center justify-content-center h-100 fs-5">
                                                                    <div className="row justify-content-center">
                                                                        <div className="col-6">
                                                                            <button
                                                                                title="Excluir Projeto"
                                                                                className="btn btn-danger btn-sm"
                                                                                onClick={(e) => handleExcluirProjeto(projeto.id, e)}
                                                                            >
                                                                                Excluir
                                                                            </button>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <button
                                                                                title="Editar Projeto"
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
                    {/* Espaçamento */}
                    <div className='col-12 col-md-1 m-3'></div>                    
                    <div className="card  mx-auto vh-auto shadow-sm p-4 bg-light rounded col-12 col-md-5" id='modelo'>
                        <div className="text-center justify-content-center d-flex" >
                            <button
                                onClick={handleCriarModelo}
                                className="btn fw-bold btn-primary"
                            >
                                Criar Novo Modelo
                            </button>
                        </div>
                        <strong className='fs-2 justify-content-center text-center align-items-center d-flex'>Meus Modelos </strong>
                        <div title='Visualizar Modelo ' className="row h-auto d-flex justify-content-center">
                    {modelos.map((modelo) => (
                        
                        <div
                            id="cardModelo"
                            key={modelo.id}
                            className="col-6 col-lg-3 card card-modelo bg-light d-flex align-items-center justify-content-center m-2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleAbrirModelo(modelo.id)}
                        >
                            <div className="flex-column align-items-center justify-content-center d-flex">
                                <div className="w-auto texto-fluido nome-limited" title={modelo.nome}>
                                    {limitarTexto(modelo.nome, 10)} {/* Limite de 10 caracteres */}
                                </div>
                                {modelo.id !== 1 && (
                                    <div className="btn-excluir">
                                        <button
                                            title="Excluir Modelo"
                                            key={modelo.id}
                                            className="btn btn-danger btn-sm d-block mt-3 align-self-center"
                                            onClick={(e) => handleExcluirModelo(modelo.id, e)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                )}
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