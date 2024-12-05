import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Nav from "./Navbar.js";
import Rodape from './Rodape.js';
import "../css/ShowProjeto.css";

export default function ProjetoShow() {
  const { id } = useParams();
  const [token] = useState(localStorage.getItem("token"));
  const [projeto, setProjeto] = useState(null);
  const [modelos, setModelos] = useState([]);
  const navigate = useNavigate();
// RESPONSIVO E PRONTO
  
  useEffect(() => {
    api.get(`/v1/projetos/${id}`, {
      headers: { Authorization: `Bearer ${token}`}
    }).then((response) => {
      setProjeto(response.data)
    }).catch((error) => {
        if (error.response?.status === 401 || error.response?.status === 498) {
          localStorage.clear();
          navigate('/');
        } else {
          alert('Erro ao carregar o projeto: ' + error.message);
        }
    });

    api.get(`/v1/modelos`, {
      headers: { Authorization: `Bearer ${token}`}
    }).then((response) => {
      setModelos(response.data);
    }).catch((error) => {
        if (error.response?.status === 401 || error.response?.status === 498) {
          localStorage.clear();
          navigate('/');
        } else {
          alert('Erro ao carregar os modelos: ' + error.message);
        }
    });
  }, [id, navigate]);

  const handleCriarDocumento = (modelo) => {
    navigate(`/documentos/criar/${projeto.id}/${modelo}`);
  };
  return (
    <div className="show ">
      <Nav text="Formatador" />
      <div className="container  vh-100">
        <h1 className="text-center mt-4 fs-2">{projeto?.nome}</h1>
        <div className="card mt-4">
          <div className="card-header">
            <h3>Informações do Projeto</h3>
          </div>
          <div className="card-body">
            <p>
              <strong>Descrição:</strong> {projeto?.descricao}
            </p>
            <p>
              <strong>Criado em:</strong> {new Date(projeto?.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Atualizado em:</strong> {new Date(projeto?.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="my-4 card bg-light">
          <h3 className="card-header">Documentos de Requisitos</h3>
          {projeto?.documentoRequisitos ? (
            <div className="card-body">
              <p><strong>Nome do Documento:</strong> {projeto?.documentoRequisitos.nome}</p>
              <p><strong>Data de Criação:</strong> {new Date(projeto?.documentoRequisitos.created_at).toLocaleDateString()}</p>
            </div>
          ) : (
            <div className="card-body">
              <strong>Este projeto ainda não possui um documento de requisitos.</strong>
              <div  className="d-flex justify-content-center align-items-center">

                <button type="button" id="botao" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                Criar Documento de Requisitos
                </button>
              </div>
              
              <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="escolherModelo" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-tittle fs-5 text-dark" id="escolherModelo">Escolha um modelo para o seu documento</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={(e) => handleCriarDocumento(e.target.value)}>
                        <select className="form-select">
                          {modelos.map((modelo) => (
                            <option key={modelo.id}>{modelo.nome}</option>
                          ))}
                        </select>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                      <button type="submit" className="btn btn-primary">Salvar Modelo</button>
                    </div>
                  </div>
                </div>
              </div>

              

            </div>
          )}
        </div>
      </div>
      <Rodape/>
    </div>
  );
}
