import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';
import Nav from './Navbar.js';
import '../css/CriarModeloPersonalizado.css';

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
        <div>
            <Nav/>
            <div className=''>
                <span className='align-self-center d-flex justify-content-center criar rounded ' ><h1  className='rounded p-1 m-3'>Criar Novo Modelo Personalizado</h1></span>
                <div className='justify-content-center d-flex align-items-center'>
                    <form onSubmit={handleSubmit} className='my-2'>
                        <label className='form-label'>
                            Nome do Modelo: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required  className='form-control'/>
                        </label>
                        <div className='row'>
                            <div className='col-5'>
                                <h3>Capa</h3>
                                {capa.map((campo, index) => (
                                    <div key={index}>
                                        <input
                                            type="checkbox"
                                            checked={campo.selecionado || campo.obrigatorio}
                                            disabled={campo.obrigatorio}
                                            onChange={() => toggleCampo(capa, setCapa, index)}
                                        />
                                        <span>{campo.titulo}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='col-2'></div>
                            
                            <div className='col-5'>
                                <h3>Conteúdo</h3>
                                {conteudo.map((secao, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        checked={secao.selecionado || secao.obrigatorio}
                                        disabled={secao.obrigatorio}
                                        onChange={() => toggleCampo(conteudo, setConteudo, index)}
                                    />
                                    <span>{secao.titulo}</span>
                                </div>
                            ))}

                            </div>             
                            
                        </div>
                        
                        <button type="submit" className='btn criar'>Salvar</button>
                    </form>
                </div>
                
            </div>
            
        </div>
    );
}
