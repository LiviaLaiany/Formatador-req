import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api.js';

export default function EditarModelo() {
    const { id } = useParams();
    const [token] = useState(localStorage.getItem('token'));
    const [modelo, setModelo] = useState(null);
    const [nome, setNome] = useState('');
    const [capa, setCapa] = useState([]);
    const [conteudo, setConteudo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/v1/modelos/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                const { nome, mod_json } = response.data;
                setModelo(response.data);
                setNome(nome);
                setCapa(mod_json.capa || []);
                setConteudo(mod_json.conteudo || []);
            })
            .catch((error) => alert('Erro ao carregar modelo: ' + error.message));
    }, [id, token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedModelo = {
            nome,
            mod_json: { capa, conteudo },
        };

        api.put(`/v1/modelos/${id}`, updatedModelo, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(() => navigate('/formatador'))
            .catch((error) => alert('Erro ao atualizar modelo: ' + error.message));
    };

    const toggleCampo = (array, setArray, index) => {
        const novoArray = [...array];
        novoArray[index].selecionado = !novoArray[index].selecionado;
        setArray(novoArray);
    };

    if (!modelo) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>Editar Modelo</h1>
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

                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}
