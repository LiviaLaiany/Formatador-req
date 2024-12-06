import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
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
    const summernoteRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        
        api.get(`/v1/projetos/${pro_id}`, {
            headers: { Authorization: `Bearer ${token}`}
        }).then((response) => {
            setProjeto(response.data);
        }).catch((err) => {
            alert('Erro ao carregar projeto escolhido: '+err.message);
        })

        api.get(`/v1/modelos/${mod_id}`, {
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

    useEffect(() => {
        summernoteRefs.current.forEach((ref) => {
            if (ref) {
                $(ref).summernote({
                    height: 100,
                    toolbar: [
                        ["font", ["bold", "italic", "underline", "clear"]],
                        ["color", ["color"]],
                        ["view", ["codeview", "help"]],
                    ],
                });
            }
        });

        return () => {
            summernoteRefs.current.forEach((ref) => {
                if (ref) {
                    $(ref).summernote("destroy");
                }
            });
        }

    });


    const handleNome = (e) => {
        setNome(e.target.value);
    }
    //so para rodar
    const handleCelula = (e) => {
        setNome(e.target.value);
    }
    const handleRemoverLinha = (e) => {
        setNome(e.target.value);
    }

    function formataTexto(texto) {
        return `<p style="text-align: justify; line-height: 1.5; text-indent: 1.25em; font-family: Arial, Times New Roman, serif; color: black; font-size: 12;">${texto}</p>`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const docJson = {...form}

        summernoteRefs.current.forEach((ref, index) => {
            if (ref && ref.dataset.name) {
                docJson[ref.dataset.name] = formataTexto($(ref).summernote("code"));
            }
        }) 

        const novoDocumento = {
            nome: nome,
            pro_id: pro_id,
            mod_id: mod_id,
            doc_json: docJson
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
                    <h4>Projeto: {projeto?.nome || "Carregando..."}</h4>
                    <h5>Modelo: {modelo?.nome || "Carregando..."}</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <h4 className="mt-4">Capa</h4>
                    {modelo?.mod_json?.capa?.map((campo, index) => (
                        <div key={index} className="mb-3">
                            <label htmlFor={campo.titulo} className="form-label">
                                {campo.titulo} {campo.obrigatorio && <span className="text-danger">*</span>}
                            </label>
                            {campo.tipo === "campo_texto" ? (
                                <div
                                    ref={(el) => (summernoteRefs.current[index] = el)}
                                    data-name={campo.titulo}
                                    className="summernote"
                                />
                            ) : null}
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

                                        {componente.tipo === "campo_texto" ? (
                                            <div
                                                ref={(el) => (summernoteRefs.current[`${index}-${compIndex}`] = el)}
                                                data-name={componente.titulo}
                                                className="summernote"
                                            />
                                        ) : componente.tipo === "arquivo" ? (
                                            <input
                                                type="file"
                                                className="form-control"
                                                id={componente.titulo}
                                                name={componente.titulo}
                                                value={form[componente.titulo] || ""}
                                                onChange={(e) =>
                                                    setForm({ ...form, [e.target.name]: e.target.files })
                                                }
                                                required={componente.obrigatorio}
                                            />
                                        ) : componente.tipo === "tabela" ? (
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        {componente.colunas.map((coluna, index) => (
                                                            <th key={index}>{coluna}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {form[componente.titulo]?.linhas?.map((linha, indexLinha) => (
                                                        <tr key={indexLinha}>
                                                            {linha.map((celula, indexCelula) => [
                                                                <td key={indexCelula}>
                                                                    <input
                                                                        type='text'
                                                                        className="form-control"
                                                                        value={celula}
                                                                        onChange={ (e) => handleCelula(componente.titulo, indexLinha, indexCelula, e.target.value)}
                                                                    />
                                                                </td>
                                                            ])}
                                                            <td>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger btn-sm"
                                                                    onClick={() => handleRemoverLinha(componente.titulo, indexLinha)}
                                                                >
                                                                    Remover
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : null}
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
                                        onChange={(e) =>
                                            setForm({ ...form, [e.target.name]: e.target.value })
                                        }
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