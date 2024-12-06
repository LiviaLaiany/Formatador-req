import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import TutorialImage from  '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
import '../css/CriarModeloPersonalizado.css';

//RESPONSIVO E PRONTO
export default function CriarModeloPersonalizado() {
    const [token] = useState(localStorage.getItem('token'));
    const [modeloBase, setModeloBase] = useState(null);
    const [nome, setNome] = useState('');
    const [capa, setCapa] = useState([]);
    const [conteudo, setConteudo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/v1/modelos/1', { 
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setModeloBase(response.data.mod_json);
                setCapa(response.data.mod_json.capa || []);
                setConteudo(response.data.mod_json.conteudo || []);
            })
            .catch((error) => alert('Erro ao carregar modelo base: ' + error.message));
    }, [token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoModelo = {
            nome,
            mod_json: { capa, conteudo },
            mod_base_id: 1, 
        };

        api.post('/v1/modelos', novoModelo, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => navigate('/formatador'))
            .catch((error) => alert('Erro ao criar modelo: ' + error.response.data.message));
    };

    const toggleCampo = (array, setArray, index) => {
        const novoArray = [...array];
        novoArray[index].selecionado = !novoArray[index].selecionado;
        setArray(novoArray);
    };

    return (
        <div className='box-1 '>
            <Nav/>
            <div className='p-4 pb-sm-4 min-vh-100 d-flex flex-column '>
                <span className='align-self-center d-flex justify-content-center text-light my-4'>
                    <h2 className='fs-2 text-center'>Criar Novo Modelo Personalizado</h2>
                </span>
            <div className='d-flex min-w-50 justify-content-center align-self-center'>
                <div className='w-100 w-md-75  w-lg-50 rounded bg-light p-3'>
                    <div className='d-flex  justify-content-center align-items-center w-100'>
                        <form onSubmit={handleSubmit} className='container'>
                            <label className='form-label my-3 w-100'>
                                <h3 className='fs-5 text-center'>Nome do Modelo:</h3>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                    className='form-control w-100'
                                />
                            </label>
                            <p className='text-start fs-6'>Selecione os campos que deseja no modelo do seu Documento de Requisitos</p>
                            <p className='text-muted text-start fs-6'>Obs: os campos já marcados são obrigatórios</p>

                            <div className='row p-3'>
                                    <div className='col-md-6 col-12 form-check  form-switch'>
                                        <h3>Capa</h3>
                                        {capa.map((campo, index) => (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    role="switch"
                                                    checked={campo.selecionado || campo.obrigatorio}
                                                    disabled={campo.obrigatorio}
                                                    onChange={() => toggleCampo(capa, setCapa, index)}
                                                    className='form-check-input'
                                                />
                                                <span className='pe-3 '>{campo.titulo}</span>
                                            </div>
                                        ))}
                                    </div>                                    
                                    <div className='col-md-6 col-12  pt-md-0 pt-2 form-check form-switch '>
                                        <h3>Conteúdo</h3>
                                        
                                        {conteudo.map((secao, index) => (
                                        <div key={index}>
                                            <input
                                                type="checkbox"
                                                className='form-check-input'
                                                role="switch"
                                                checked={secao.selecionado || secao.obrigatorio}
                                                disabled={secao.obrigatorio}
                                                onChange={() => toggleCampo(conteudo, setConteudo, index)}
                                            />
                                            <span>{secao.titulo}</span>
                                        </div>
                                    ))}

                                    </div>             
                                    
                                </div>
                                <div className="align-items-center justify-content-center m-5 d-flex">
                                    <button type="submit" className="btn  min-w-50" id="botao">
                                        Criar Modelo
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

            
            <Rodape/>
        </div>
    );
}
