import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import Nav from "./Navbar.js";
import Rodape from './Rodape.js';
import "../css/ShowProjeto.css";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProjetoShow() {
  const { id } = useParams();
  const [token] = useState(localStorage.getItem("token"));
  const [projeto, setProjeto] = useState(null);
  const [modelos, setModelos] = useState([]);
  const [modeloEscolhido, setModeloEscolhido] = useState(null);
  const [documento, setDocumento]  = useState(null);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
// RESPONSIVO E PRONTO
  
  useEffect(() => {

    if (!token) {
      navigate('/')
    } else {
      api.get(`/v1/projetos/${id}`, {
        headers: { Authorization: `Bearer ${token}`}
      }).then((response) => {
        setProjeto(response.data)
  
        api.post(`/v1/documentos/getDocumentoWithProjeto`, {
          pro_id: `${response.data.id}`
        }, {
          headers: { Authorization: `Bearer ${token}`}
        }).then((docResponse) => {
          setDocumento(docResponse.data);
          console.log("Documento atualizado:", docResponse.data);
        }).catch((errorDoc) =>
          console.log('Erro ao carregar documento' + errorDoc.response.data.message)
        )
  
      }).catch((error) => {
          if (error.response?.status === 401 || error.response?.status === 498) {
            localStorage.clear();
            navigate('/');
          } else {
            alert('Erro ao carregar o projeto: ' + error.message);
          }
      })
  
      api.get(`/v1/modelos`, {
        headers: { Authorization: `Bearer ${token}`}
      }).then((response) => {
        setModelos(response.data);
      }).catch((error) => {
          if (error.response?.status === 401 || error.response?.status === 498) {
            localStorage.clear();
            navigate('/');
          } else {
            alert('Erro ao carregar os modelos: ' + error.response.data.message);
          }
      });
    }

  }, [id, navigate]);

  const handleChange = (e) => {
    setModeloEscolhido(e.target.value)
  }

  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }
  

  const handleCriarDocumento = () => {
    if (modeloEscolhido) {
      navigate(`/documentos/criar/${projeto.id}/${modeloEscolhido}`);
    } else {
      alert("Por favor, selecione um modelo.");
    } 
  }

  const handleExcluirDocumento = () => {
    if (window.confirm("Tem certeza que deseja deletar documento?")) { 
      api.delete(`v1/documentos/${documento.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then( () => {
          alert('Documento deletado com sucesso');
          navigate(0);
      }).catch((err) => {
          alert('Erro ao deletar documento: ' + err.response.data.message);
      });
    }
  }

  const handleVerDocumento = () => {
    navigate(`/documentos/${documento.id}`)
  }

  return (
    <div className="show ">
      <Nav text="Formatador" />
      <div className="container  vh-100">
        <div className="row">
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
        </div>
        
        <div className="row">
          <div className="my-4 card bg-light w-100">
            <h3 className="card-header">Documentos de Requisitos</h3>
            {documento ? (
              <div className="card-body" >
                <p><strong>Nome do Documento:</strong> {documento ? documento.nome : "Carregando..."}</p>
                <p><strong>Data de Criação:</strong> {documento ? new Date(documento.created_at).toLocaleDateString() : "Carregando..."}</p>
                <div className="mb-2">
                  <button className="btn btn-primary btn-sm" onClick={handleVerDocumento}>Ver Documento</button>
                </div>
                <div>
                  <button className="btn btn-danger btn-sm" onClick={handleExcluirDocumento}>Excluir Documento</button>
                </div>
              </div>
            ) : (
              <div className="card-body">
                <p className="fw-bold">Este projeto ainda não possui um documento de requisitos.</p>
                <div  className="d-flex justify-content-center align-items-center">
                  <button type="button" id="botao" className="btn btn-primary mt-3" onClick={showModal}>
                    Criar Documento de Requisitos
                  </button>
                </div>
              
                
                <Modal show={modal} onHide={closeModal}>
                  <Modal.Header>
                    <Modal.Title>
                      <h1 className="fs-5 text-dark">Escolha um modelo para o seu documento</h1>
                    </Modal.Title>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                  </Modal.Header>
                  <Modal.Body>
                    <select className="form-select" value={modeloEscolhido || ""} onChange={closeModal && handleChange}>
                      <option value="" disabled>Selecione clicando aqui!</option>
                        {modelos.map((modelo) => (
                      <option key={modelo.id} value={modelo.id}>{modelo.nome}</option>
                      ))}
                    </select>
                  </Modal.Body>
                  <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Fechar</button>
                    <button type="submit" className="btn btn-primary" onClick={handleCriarDocumento}>Salvar Modelo</button>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
            
          </div>
          <div className="align-items-center justify-content-center d-flex" onClick={() => navigate('/formatador')}>
                        <button type="submit" className="btn  min-w-25  m-4" id="botao">
                            Voltar
                        </button>
            </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}
