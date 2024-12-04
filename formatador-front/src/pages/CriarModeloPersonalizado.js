import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import TutorialImage from  '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
import '../css/CriarModeloPersonalizado.css';

// FAZER A RESPONSIVIDADE

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
            .catch((error) => alert('Erro ao criar modelo: ' + error.message));
    };

    const toggleCampo = (array, setArray, index) => {
        const novoArray = [...array];
        novoArray[index].selecionado = !novoArray[index].selecionado;
        setArray(novoArray);
    };

    return (
        <div className='box-1 '>
            <Nav/>
            <div className='vh-100'>
                <span className='align-self-center d-flex justify-content-center text-light my-4' ><h2  className=' p-1 m-3 fs-2'>Criar Novo Modelo Personalizado</h2></span>
                
                <div className='d-flex container-fluid justify-content-center mt-5 align-items-center'>
                    <div className=' w-50 rounded align-self-center bg-light'>
                        <div className='justify-content-center d-flex align-items-center w-100'>
                            <form onSubmit={handleSubmit} className='m-2 container '>
                                <label className='form-label text-center my-2 container-fluid'>
                                
                                    <h3 className=''> Nome do Modelo:  </h3><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required id='form' className=' form-control'/>
                                    
                                </label>
                                <p>Selecione os campos que deseja no modelo do seu Documento de Requisistos</p>
                                <p className=''>Obs: os campos já marcados são obrigatórios</p>
                                <div className='row'>
                                    <div className='col-md-5 col-12 form-check form-switch'>
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
                                                <span>{campo.titulo}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='col-md-2 d-none d-md-block'></div>
                                    
                                    <div className='col-md-5 col-12  form-check form-switch '>
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
                                    <button type="submit" className="btn  w-50" id="botao">
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
