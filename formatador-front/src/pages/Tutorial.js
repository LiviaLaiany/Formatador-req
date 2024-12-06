import Nav from './Navbar.js';
import '../css/Tutorial.css';
import Passos from '../imagens/TestePassos.svg';
import T1 from '../imagens/T1.svg';
import T2 from '../imagens/T2.svg';
import T3 from '../imagens/T3.svg';
import T4 from '../imagens/T4.svg';
import T5 from '../imagens/T5.svg';
import T6 from '../imagens/T6.svg';
import Rodape from './Rodape.js';
import Card from './Card.js';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

export default function Tutorial(){
    return(
        <div>
            <Nav text = "Tutorial"/>
            <div className='container'>
                <div className='row p-3 d-flex align-items-center mb-1 justify-content-center mt-3'>
                    <h3 className='text-center'>Siga esse Passo a Passo para acessar o nosso Formatador de Documento de Requisitos</h3>
                </div> 
                <div className='row p-3 d-flex align-items-center mb-4 justify-content-center'>
                    <img src={Passos} className='d-none d-lg-block w-75'></img>
                </div> 
                <div className='row mb-5 mt-3'>
                    <div className='col-12 col-lg-6'>
                        <Carousel fade interval={3000} indicators={true} controls={true} className='background'>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T1} title="Cadastre-se" text="Para acessar as funcionalidades do nosso site, é necessário que você crie uma conta." buttonClass="btn1"/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T2} title="Crie um Projeto" text="Inicie seu processo criando um novo projeto, organizando o seus documentos e artefatos." buttonClass="btn2"/>                        </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T3} title="Escolha um Modelo" text="Selecione o modelo de documento de requisitos que melhor atende ao seu projeto ou personalize o seu."/>                        </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T4} title="Crie um Documento" text="Preencha os campos e configure os componentes para gerar um documento de requisitos único." buttonClass="btn4"/>                        </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T5} title="Edite o seu Arquivo" text="Faça alterações no documento a qualquer momento para mantê-lo atualizado e relevante." buttonClass="btn5"/>                        </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center">
                                    <Card icon={T6} title="Baixe o seu trabalho" text="Conclua o seu projeto e baixe o documento de requisitos completo em formato PDF." buttonClass="btn6"/>                        </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='sobre-nos-container col-12 col-lg-6 p-2 w-50'>
                        <h3 className='text-start'>Sobre Nós</h3>
                        <p>
                            Somos estudantes do <strong>Instituto Federal do Rio Grande do Norte - Campus Caicó</strong> e 
                            desenvolvemos esse Projeto de Formatador de Requisitos buscando auxiliar e fornecer um ambiente 
                            de suporte para analistas iniciantes durante a elaboração de um documento de requisitos.
                        </p>
                        <p><strong>Equipe: </strong>Ana Clara de Melo Souza, Hemilly Hellen Oliveira Pereira, Livia Laiany Oliveira Silva, Luis Henrique Silva Fernandes</p>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}