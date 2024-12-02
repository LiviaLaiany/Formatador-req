import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.js';

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
            <h1>Criar Novo Modelo Personalizado</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do Modelo:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>

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

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
