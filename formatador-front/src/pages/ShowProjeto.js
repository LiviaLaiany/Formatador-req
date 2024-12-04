import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Nav from "./Navbar.js";
import Rodape from './Rodape.js';
import "../css/ShowProjeto.css";

export default function ProjetoShow() {
  const { id } = useParams(); // Pega o ID do projeto da URL
  const [projeto, setProjeto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Carregar os dados do projeto
  useEffect(() => {
    const fetchProjeto = async () => {
      try {
        // Recupera o token do localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Você precisa estar logado para acessar esta página.");
          setLoading(false);
          return;
        }

        // Faz a requisição para pegar os detalhes do projeto com o token JWT
        const response = await api.get(`/v1/projetos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data)
        setProjeto(response.data);
        setLoading(false);
      } catch (err) {
        setError("Projeto não encontrado ou acesso não autorizado.");
        setLoading(false);
      }
    };

    fetchProjeto();
  }, [id]);

  // Função para criar documento de requisitos
  const handleCreateDocumento = () => {
    navigate(`/documentos/create?pro_id=${projeto.id}`);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="show vh-100">
      <Nav text="Projeto Detalhado" />
      <div className="container">
        <h1 className="text-center mt-4 fs-2">{projeto.nome}</h1>
        <div className="card mt-4">
          <div className="card-header">
            <h3>Informações do Projeto</h3>
          </div>
          <div className="card-body">
            <p>
              <strong>Descrição:</strong> {projeto.descricao}
            </p>
            <p>
              <strong>Criado em:</strong> {new Date(projeto.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Atualizado em:</strong> {new Date(projeto.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="my-4 card bg-light">
          <h3 className="card-header">Documentos de Requisitos</h3>
          {projeto.documentoRequisitos ? (
            <div className="card-body">
              <p><strong>Nome do Documento:</strong> {projeto.documentoRequisitos.nome}</p>
              <p><strong>Data de Criação:</strong> {new Date(projeto.documentoRequisitos.created_at).toLocaleDateString()}</p>
            </div>
          ) : (
            <div className="card-body">
              <strong>Este projeto ainda não possui um documento de requisitos.</strong>
              <div  className="d-flex justify-content-center align-items-center">
                <button id="botao" onClick={handleCreateDocumento} className="btn btn-primary">
                Criar Documento de Requisitos
                </button>
              </div>
              
            </div>
          )}
        </div>
      </div>
      <Rodape/>
    </div>
  );
}
