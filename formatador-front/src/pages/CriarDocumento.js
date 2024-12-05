import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../services/api';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';

export default function CriarDocumento() {
    const [token] = useState(localStorage.getItem('token'));
    const {pro_id, mod_id} = useParams();
    const [projeto, setProjeto] = useState('');
    const [modelo, setModelo] = useState('');
    const [nome, setNome] = useState('');
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        
        api.get(`/v1/projetos/${pro_id}`, {
            headers: { Authorization: `Bearer ${token}`}
        }).then((response) => {
            setProjeto(response.data);
        }).catch((err) => {
            alert('Erro ao carregar projeto escolhido: '+err.message);
        })

        api.get(`/v1/modelos/${pro_id}`, {
            headers: { Authorization: `Bearer ${token}`}
        }).then((response) => {
            setModelo(response.data);
            const camposForm = {};
            response.data.mod_json.capa.forEach((campo) => {
                camposForm[campo.titulo] = "";
            })
            response.data.mod_json.conteudo.forEach((secao) => {
                if (secao.componentes) {
                    secao.componentes.forEach((componente) => {
                        camposForm[componente.titulo] = "";
                    });
                } else {
                    camposForm[secao.titulo] = "";
                }
            })
            setForm(camposForm);
        }).catch((err) => {
            alert('Erro ao carregar modelo escolhido: '+err.message);
        })   
    }, [pro_id, mod_id, token]);

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    const handleCampos = (e) => {
        const { nome, valor } = e.target;
        setForm({
            ...form,
            [nome] : valor
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoDocumento = {
            nome: nome,
            pro_id: pro_id,
            mod_id: mod_id,
            doc_json: form
        }

        api.post(`/v1/documentos`, novoDocumento, {
            headers: { Authorization: `Bearer ${token}`}
        }).then(() => {
            alert('Documento criado com sucesso!');
            navigate(`/projetos/${pro_id}`);
        }).catch((err) => {
            alert('Erro ao criar documento: ' + err.message)
        })

    }


    return (
        <div>
            <Nav />
            <div className="container mt-4">
                <h2 className="text-center">Criar Documento de Requisitos</h2>
                <div className="mt-4">
                    <h4>Projeto: {projeto.nome || "Carregando..."}</h4>
                    <h5>Modelo: {modelo.nome || "Carregando..."}</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <h4 className="mt-4">Capa</h4>
                    {modelo?.mod_json?.capa?.map((campo, index) => (
                        <div key={index} className="mb-3">
                            <label htmlFor={campo.titulo} className="form-label">
                                {campo.titulo} {campo.obrigatorio && <span className="text-danger">*</span>}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id={campo.titulo}
                                name={campo.titulo}
                                value={form[campo.titulo] || ""}
                                onChange={handleCampos}
                                required={campo.obrigatorio}
                            />
                            {campo.descricao && <small className="form-text text-muted">{campo.descricao}</small>}
                        </div>
                    ))}

                    <h4 className="mt-4">Conteúdo</h4>
                    {modelo?.mod_json?.conteudo?.map((secao, index) => (
                        <div key={index} className="mb-3">
                            <h5>{secao.titulo}</h5>
                            {secao.descricao && <p>{secao.descricao}</p>}
                            {secao.componentes ? (
                                secao.componentes.map((componente, compIndex) => (
                                    <div key={compIndex} className="mb-3">
                                        <label htmlFor={componente.titulo} className="form-label">
                                            {componente.titulo} {componente.obrigatorio && <span className="text-danger">*</span>}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={componente.titulo}
                                            name={componente.titulo}
                                            value={form[componente.titulo] || ""}
                                            onChange={handleCampos}
                                            required={componente.obrigatorio}
                                        />
                                        {componente.descricao && <small className="form-text text-muted">{componente.descricao}</small>}
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <label htmlFor={secao.titulo} className="form-label">
                                        {secao.titulo} {secao.obrigatorio && <span className="text-danger">*</span>}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={secao.titulo}
                                        name={secao.titulo}
                                        value={form[secao.titulo] || ""}
                                        onChange={handleCampos}
                                        required={secao.obrigatorio}
                                    />
                                </div>
                            )}
                        </div>
                    ))}

                    <button type="submit" className="btn btn-primary mt-4">
                        Criar Documento
                    </button>
                </form>
            </div>
            <Rodape />
        </div>

    )




}