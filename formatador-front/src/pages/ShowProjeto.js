import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Nav from "./Navbar.js";

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
    <div>
      <Nav text="Projeto Detalhado" />
      <div className="container">
        <h1 className="text-center mt-4">{projeto.nome}</h1>
        <div className="card mt-4">
          <div className="card-header">
            <strong>Informações do Projeto</strong>
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

        <div className="mt-4">
          <h3>Documentos de Requisitos</h3>
          {projeto.documentoRequisitos ? (
            <div>
              <p><strong>Nome do Documento:</strong> {projeto.documentoRequisitos.nome}</p>
              <p><strong>Data de Criação:</strong> {new Date(projeto.documentoRequisitos.created_at).toLocaleDateString()}</p>
            </div>
          ) : (
            <div>
              <p>Este projeto ainda não possui um documento de requisitos.</p>
              <button onClick={handleCreateDocumento} className="btn btn-primary">
                Criar Documento de Requisitos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
