import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import '../css/summernotecss.css';
import api from '../services/api';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import '../css/CriarDocumento.css';

export default function CriarDocumento() {
    const [token] = useState(localStorage.getItem('token'));
    const { pro_id, mod_id } = useParams();
    const [projeto, setProjeto] = useState('');
    const [modelo, setModelo] = useState('');
    const [nome, setNome] = useState('');
    const [form, setForm] = useState({});
    const summernoteRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {

        if(!token) {
            navigate('/')
        } else {
            api.get(`/v1/projetos/${pro_id}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then((response) => {
                setProjeto(response.data);
            }).catch((err) => {
                alert('Erro ao carregar projeto escolhido: ' + err.message);
            });   

            api.get(`/v1/modelos/${mod_id}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then((response) => {
                setModelo(response.data);
                const camposForm = {};
    
                response.data.mod_json.capa.forEach((campo) => {
                    camposForm[campo.titulo] = "";
                });
    
                response.data.mod_json.conteudo.forEach((secao) => {
                    if (secao.componentes) {
                        secao.componentes.forEach((componente) => {
                            if (componente.tipo === "tabela") {
                                camposForm[componente.titulo] = {
                                    colunas: componente.colunas || [],
                                    linhas: componente.linhas || []
                                };
                            } else {
                                camposForm[componente.titulo] = "";
                            }
                        });
                    } else {
                        if (secao.tipo === "tabela") {
                            camposForm[secao.titulo] = {
                                colunas: secao.colunas || [],
                                linhas: secao.linhas || []
                            };
                        } else if (secao.tipo === "lista") {
                            camposForm[secao.titulo] = [];
                        } else {
                            camposForm[secao.titulo] = "";
                        }
                    }
                });
                setForm(camposForm);
            }).catch((err) => {
                alert('Erro ao carregar modelo escolhido: ' + err.message);
            });
        }
    }, [pro_id, mod_id, token]);

    useEffect(() => {
        Object.keys(summernoteRefs.current).forEach((key) => {
            const ref = summernoteRefs.current[key];
            if (ref) {
                $(ref).summernote({
                    height: 100,
                    toolbar: [
                        ["font", ["bold", "italic", "underline", "clear"]],
                        ["color", ["color"]],
                        ["fontsize", ["fontsize"]],
                        ["para", ["ul", "ol","paragraph"]],
                        ['view', ['codeview', 'help']],
                    ],
                    callbacks: {
                        onKeydown: function (e) {
                            if (e.key === "Tab") {
                                e.preventDefault();
                                if(e.shiftKey) {
                                    document.execCommand("outdent");
                                } else {
                                    document.execCommand("indent")
                                }
                            }
                        },
                        onInit: function () {
                            $(".notable-editable p").css("text-indent", "2em")
                        },
                        tabsize: 2,
                    }
                });
            }
        });

        return () => {
            Object.keys(summernoteRefs.current).forEach((key) => {
                const ref = summernoteRefs.current[key];
                if (ref) {
                    $(ref).summernote("destroy");
                }
            });
        };
    }, [modelo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const docJson = { ...form };

        Object.keys(summernoteRefs.current).forEach((key) => {
            const ref = summernoteRefs.current[key];
            if (ref) {
                docJson[key] = $(ref).summernote("code");
            } else {
                console.log('erro');
            }
        });

        const novoDocumento = {
            nome: nome,
            pro_id: pro_id,
            mod_id: mod_id,
            doc_json: docJson,
        };

        console.log(novoDocumento)

        api.post(`/v1/documentos`, novoDocumento, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(() => {
            alert("Documento criado com sucesso!");
            navigate(`/projetos/${pro_id}`);
        }).catch((err) => {
            alert("Erro ao criar documento: " + err.message);
        });
    }

    const handleVoltar = () => {
        navigate(`/projetos/${pro_id}`)
    }

    const handleAdicionarLinha = (titulo) => {
        setForm((formSalvo) => ({
            ...formSalvo,
            [titulo]: {
                ...formSalvo[titulo],
                linhas: [...(formSalvo[titulo]?.linhas || []), formSalvo[titulo]?.colunas?.map(() => "")],
            },
        }));
    };

    const handleCelula = (titulo, linhaIndex, celulaIndex, valor) => {
        setForm((formSalvo) => {
            const novasLinhas = [...formSalvo[titulo].linhas];
            novasLinhas[linhaIndex][celulaIndex] = valor;
            return {
                ...formSalvo,
                [titulo]: {
                    ...formSalvo[titulo],
                    linhas: novasLinhas,
                },
            };
        });
    };

    const handleRemoverLinha = (titulo, linhaIndex) => {
        setForm((formSalvo) => ({
            ...formSalvo,
            [titulo]: {
                ...formSalvo[titulo],
                linhas: formSalvo[titulo].linhas.filter((_, index) => index !== linhaIndex),
            },
        }));
    };

    const handleAdicionarItemLista = (titulo) => {
        setForm((formSalvo) => ({
            ...formSalvo,
            [titulo]: [...(formSalvo[titulo] || []), ""],
        }));
    };

    const handleChangeLista = (titulo, index, valor) => {
        setForm((formSalvo) => {
            const novaLista = [...(formSalvo[titulo] || [])];
            novaLista[index] = valor;
            return {
                ...formSalvo,
                [titulo]: novaLista,
            };
        });
    };

    const handleRemoverItemLista = (titulo, index) => {
        setForm((formSalvo) => {
            const novaLista = [...(formSalvo[titulo] || [])];
            novaLista.splice(index, 1);
            return {
                ...formSalvo,
                [titulo]: novaLista,
            };
        });
    };

    return (
        <div className="color">
            <Nav text='Formatador'/>
            <h2 className="text-center m-5 text-light">Criar Documento de Requisitos</h2>

            <div className="container my-4 rounded">
                <form onSubmit={handleSubmit} className="pb-5">
                <div className="my-4 bg-white py-2 border border-black">
                    <h4 className="text-center fs-2 my-3">Projeto: {projeto?.nome || "Carregando..."}</h4>
                    <h5 className="text-center fs-5">Modelo: {modelo?.nome || "Carregando..."}</h5>
                    <label className=' my-3 w-100 d-flex align-items-center justify-content-center'>
                        <h3 className='text-center fs-5 mx-3 align-self-center'>Nome do Documento:</h3>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className='form-control w-25'
                        />
                    </label>
                </div>
                <div className="bg-white rounded p-3 border border-black">
                    <h4 className="mt-4 text-center">Capa</h4>
                    {modelo?.mod_json?.capa?.map((campo, index) => (
                        campo.obrigatorio == true ? (
                            <div key={`capa-${index}`} className="mb-3">
                                <label htmlFor={campo?.titulo} className="form-label">
                                    {campo?.titulo} {campo?.obrigatorio && <span className="text-danger">*</span>}
                                </label>
                                {campo?.tipo === "campo_texto" ? (
                                    <div
                                        ref={(el) => (summernoteRefs.current[campo.titulo] = el)}
                                        data-name={campo?.titulo}
                                        className="summernote"
                                    />
                                ) : null}
                                {campo?.descricao && <small className="form-text text-muted">{campo?.descricao}</small>}
                        </div>
                        ) :  null
                    ))}
                </div>
                <div className="bg-white my-3 p-3 rounded border border-black ">
                    <h4 className="my-4 text-center">Conteúdo</h4>
                    {modelo?.mod_json?.conteudo?.map((secao, index) => (
                        secao.obrigatorio == true ? (
                            <div key={`conteudo-${index}`} className="mb-3">
                            <h5>{secao.titulo}</h5>
                            {secao.descricao && <p>{secao.descricao}</p>}
                            {secao.componentes ? (
                                secao.componentes.map((componente, compIndex) => (
                                    componente.obrigatorio == true ? (
                                        <div key={`conteudo-${index}-componente-${compIndex}`} className="mb-3">
                                            <label htmlFor={componente?.titulo} className="form-label">
                                                {componente?.titulo} {componente?.obrigatorio && <span className="text-danger">*</span>}
                                            </label>
                                            {componente?.tipo === "campo_texto" ? (
                                                
                                                <div
                                                    ref={(el) => (summernoteRefs.current[componente.titulo] = el)}
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
                                                <div>
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
                                                                    {linha.map((celula, indexCelula) => (
                                                                        <td key={indexCelula}>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                value={celula || ""}
                                                                                onChange={ (e) => handleCelula(componente.titulo, indexLinha, indexCelula, e.target.value)}
                                                                            />
                                                                        </td>
                                                                    ))}
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
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() => handleAdicionarLinha(componente.titulo)}
                                                    >
                                                        Adicionar Linha
                                                    </button>
                                                </div>
                                            ) : componente?.tipo == "lista" ? (
                                                <div>
                                                    {(form[componente.titulo] || [])?.map((item, indexLista) => (
                                                        <div key={indexLista} className="d-flex align-items-center mb-2">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={item || ""}
                                                                onChange={(e) => handleChangeLista(componente.titulo, indexLista, e.target.value)}
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm ms-2"
                                                                onClick={() => handleRemoverItemLista(componente.titulo, indexLista)}
                                                            >
                                                                Remover
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-sm mt-2 botao"
                                                        onClick={() => handleAdicionarItemLista(componente.titulo)}
                                                    >
                                                        Adicionar Item
                                                    </button>
                                                </div>
                                            ) : null}
                                            {componente.descricao && <small className="form-text text-muted">{componente.descricao}</small>}
                                        </div>
                                    ) : null
                                ))
                            ) : secao.tipo === "tabela" ? (
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                {secao.colunas.map((coluna, index) => (
                                                    <th key={index}>{coluna}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {form[secao.titulo]?.linhas?.map((linha, indexLinha) => (
                                                <tr key={indexLinha}>
                                                    {linha.map((celula, indexCelula) => (
                                                        <td key={indexCelula}>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={celula || ""}
                                                                onChange={(e) => handleCelula(secao.titulo, indexLinha, indexCelula, e.target.value)}
                                                            />
                                                        </td>
                                                    ))}
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => handleRemoverLinha(secao.titulo, indexLinha)}
                                                        >
                                                            Remover
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm botao"
                                        onClick={() => handleAdicionarLinha(secao.titulo)}
                                    >
                                        Adicionar Linha
                                    </button>
                                </div>
                            ) : secao.tipo === "lista" ? (
                                <div>
                                    {(form[secao.titulo] || [])?.map((item, indexLista) => (
                                        <div key={indexLista} className="d-flex align-items-center mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={item || ""}
                                                onChange={(e) => handleChangeLista(secao.titulo, indexLista, e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() => handleRemoverItemLista(secao.titulo, indexLista)}
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm mt-2 botao"
                                        onClick={() => handleAdicionarItemLista(secao.titulo)}
                                    >
                                        Adicionar Item
                                    </button>
                                </div>
                            ) : secao.tipo === "campo_texto" && (
                                <div
                                    ref={(el) => (summernoteRefs.current[secao.titulo] = el)}
                                    data-name={secao.titulo}
                                    className="summernote"
                                />
                            )}
                        </div>
                        ) : null
                    ))}
                    </div>
                    <div className="d-flex justify-content-center align-items-center ">
                        <button type="submit" className="btn btn-primary  mt-4 " id="botao">
                            Criar Documento
                        </button>
                    </div>
                    <div className="align-items-center justify-content-center d-flex" onClick={() => navigate(`/projetos/${projeto.id}`)}>
                        <button type="submit" className="btn  min-w-25  m-4" id="botao">
                            Voltar
                        </button>
                    </div>
                </form>
                
            </div>
            <Rodape />
        </div>
    );
}
