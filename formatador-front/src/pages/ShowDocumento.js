import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../services/api';
import Nav from './Navbar.js';
import Rodape from './Rodape.js';
import '../css/summernotecss.css'; 

export default function ShowDocumento() {
    const [token] = useState(localStorage.getItem('token'));
    const {id} = useParams();
    const [documento, setDocumento] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`v1/documentos/${id}`, {
            headers: { Authorization: `Bearer ${token}`}
        }).then((response) => {
            setDocumento(response.data);
        }).catch((error) => {
            alert('Erro ao acessar documento: '+error.response?.data?.message)
        })
    }, [token]);

    const renderCampo = (titulo, valor) => {
        if (typeof valor === "string") {
            return (
                <div key={titulo} className="mb-3">
                    <h5>{titulo}</h5>
                    <p dangerouslySetInnerHTML={{ __html: valor || "Não preenchido" }} />
                </div>
            );
        } else if (Array.isArray(valor)) {
            return (
                <div key={titulo} className="mb-3">
                    <h5>{titulo}</h5>
                    <ul>
                        {valor.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            );
        } else if (valor?.colunas && valor?.linhas) {
            return (
                <div key={titulo} className="mb-3">
                    <h5>{titulo}</h5>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {valor.colunas.map((coluna, i) => (
                                    <th key={i}>{coluna}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {valor.linhas.map((linha, i) => (
                                <tr key={i}>
                                    {linha.map((celula, j) => (
                                        <td key={j}>{celula}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (valor === null) {
            return (
                null
            );
        } else {
            return (
                <div key={titulo} className="mb-3">
                    <h5>{titulo}</h5>
                    <p>Tipo não suportado</p>
                </div>
            );
        }
    };

    const renderCampos = () => {
        if (!documento?.doc_json) {
            return <p>Não preenchido</p>;
        }

        return Object.entries(documento.doc_json).map(([titulo, valor]) =>
            renderCampo(titulo, valor)
        );
    };

    return (
        <div className="show">
            <Nav text="Formatador" />
            <div className="container vh-100">
                <div className="my-4 bg-light">
                    <h3 className="text-dark">{documento?.nome || "Carregando..."}</h3>
                    <div className="text-dark">
                        {renderCampos()}
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}