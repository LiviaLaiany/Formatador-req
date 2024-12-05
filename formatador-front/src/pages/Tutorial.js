import Nav from './Navbar.js';
import '../css/Tutorial.css';
import passos from '../imagens/passos.svg';
import TestePassos from '../imagens/TestePassos.svg';
import TutorialImage from '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
import T1 from '../imagens/T1.svg';
import Teste from '../imagens/Teste.svg';
import Tutorial2 from '../imagens/Tutorial2.svg';
import Tutorial3 from '../imagens/Tutorial3.svg';
import T2 from '../imagens/T2.svg';
import T3 from '../imagens/T3.svg';
import T4 from '../imagens/T4.svg';
import T5 from '../imagens/T5.svg';
import T6 from '../imagens/T6.svg';
import Rodape from './Rodape.js';
import Card from './Card.js';
import Cadastro from '../imagens/Cadastro.PNG';
import Criar from '../imagens/Criar.PNG';


export default function Tutorial(){
    return(
        <div className="px-0 mx-0">
            <Nav text = "Tutorial"/>
            <div className='container-fluid mx-0 px-0 mb-0 p-3'>
                {/* a mudança da letra nao funciona */}
                <div className='row text-center fs-sm-5 fs-3 row mb-0 mt-3 fw-bold d-flex align-items-center justify-content-center p-2 '>
                    <p className='mb-0 fs-4'>Como utilizar o Formatador de Documento de Requisito?</p>
                </div>
                {/* <div className='row p-3 d-flex align-items-center mb-2 justify-content-center mt-3'>
                    <img src={TestePassos} className='d-none d-lg-block w-75'></img>
                </div> */}
                <div className="row m-3 p-2 background">
                    <Card icon={T1} title="Cadastre-se" text="Para acessar as funcionalidades do nosso site, é necessário que você crie uma conta." buttonClass="btn1"/>
                    <Card icon={T2} title="Crie um Projeto" text="Inicie seu processo criando um novo projeto. Organize seus documentos e artefatos em um espaço exclusivo." buttonClass="btn2"/>
                    <Card icon={T3} title="Escolha um Modelo" text="Selecione o modelo de documento de requisitos que melhor atende ao seu projeto ou personalize o seu." buttonClass="btn3"/>
                </div>
                <div className='row m-3 p-2 background'>
                    <Card icon={T4} title="Crie um Documento" text="Preencha os campos e configure os componentes para gerar um documento de requisitos único." buttonClass="btn4"/>
                    <Card icon={T5} title="Edite o seu Arquivo" text="Faça alterações no documento a qualquer momento para mantê-lo atualizado e relevante." buttonClass="btn5"/>
                    <Card icon={T6} title="Baixe o seu trabalho" text="Conclua o seu projeto e baixe o documento de requisitos completo em formato PDF." buttonClass="btn6"/>
                </div>

                    {/* <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T1} alt="Ícone" height="40" className="me-2" />
                                    <span>Cadastre-se</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Para acessar as funcionalidades do nosso site, é necessário que você
                                        crie uma conta com e-mail e senha válidos. Seus documentos editados
                                        serão salvos e acessíveis a qualquer momento.
                                    </p>
                                    <div className="text-center">
                                        <button className="btn1">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T2} alt="Ícone" height="40" className="me-2" />
                                    <span>Crie um Projeto</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Para criar o seu Documento de Requisitos é necessário, primeiramente, criar um Projeto. O qual você poderá editar o título e a descrição.
                                    </p>
                                    <div className="text-center">
                                        <button className="btn2">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T3} alt="Ícone de Cadastro" height="40" className="me-2" />
                                    <span>Escolha um modelo</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Auxiliando no processo, o nosso site dispõe de modelos prontos, assim, você precisa apenas escolher o que se adequa ao seu documento.
                                    </p>
                                    <div className="text-center">
                                        <button className="btn3">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-3 p-2 background">
                    <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T4} alt="Ícone de Cadastro" height="40" className="me-2" />
                                    <span>Crie um documento</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Após escolher o seu modelo de documento, crie um documento em branco para ser o seu Documento de Requisitos!</p>
                                    <div className="text-center">
                                        <button className="btn4">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T5} alt="Ícone de Cadastro" height="40" className="me-2" />
                                    <span>Edite o seu arquivo</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Depois de criar o seu documento de requisitos, edite o seu arquivo como preferir para adicionar suas informações ou editar partes do Documento!
                                    </p>
                                    <div className="text-center">
                                        <button className="btn5">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
                        <div className="card-container">
                            <div className="card shadow">
                                <div className="card-header">
                                    <img src={T6} alt="Ícone de Cadastro" height="40" className="me-2" />
                                    <span>Baixe o seu trabalho</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Após finalizar o seu documento, baixe o seu documento em pdf.
                                    </p>
                                    <div className="text-center">
                                        <button className="btn6">Clique Aqui</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className='row px-0'>
                    <div className='h-50 col-12 d-none d-lg-flex justify-content-between'>
                        <img src={TutorialImage} className='d-none d-lg-block'></img>
                        <img src={Tutorial1} className='d-none d-lg-block'></img>
                    </div>
                </div> */}
                    

                    
                    

               
                
                {/* 
                    
                       
                        
                <div className='row justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-lg-block'></img>
                    <img src={Tutorial1} className='d-none d-lg-block'></img>
                </div>  
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2} className='d-none d-lg-block'></img>
                        <img src= {Tutorial3} className='d-none d-lg-block'></img>
                </div>

                // colocar um para criar projeto

                <div className='row vh-100 mx-5 justify-content-center  '>
                    <div className='col-5 '>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img src={T2}></img>
                            <div className='fw-bolder align-self-center '>Crie um Documento</div>
                        </div>
                        <div className='m-5 align-items-center '>
                            <span className='d-block text-center'>Para fazer um documento de requisitos, é necessário que inicialmente acesse as funcionalidades do  “Formatador”.</span>
                            <span className='d-block text-center'>Nessa seção, crie um documento em branco para ser seu Documento de Requisitos!</span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <img alt='imagem' className='border' src={Criar}></img>
                    </div>
                </div>
                <div className='justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-lg-block'></img>
                    <img src={Tutorial1} className='d-none d-lg-block'></img>
                </div>
            </div>
            <div>
                <div className='justify-content-between d-flex'>
                    <img src= {Tutorial2} className='d-none d-lg-block'></img>
                    <img src= {Tutorial3} className='d-none d-lg-block'></img>
                </div>
                <div className='row vh-100 mx-5 justify-content-center  '>
                    <div className='col-5 '>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img src={T3}></img>
                            <div className='fw-bolder align-self-center '>Escolha um Modelo</div>
                        </div>
                        <div className='m-5 align-items-center '>
                            <span className='d-block text-center'>Auxiliando no processo, o nosso site dispõe de modelos prontos, assim, você precisa apenas escolher o que se adequa ao seu documento.</span>
                            <span className='d-block text-center'>Ao escolher, ele será adicionado no seu Arquivo</span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <img alt='imagem' className='border'></img>
                    </div>
                </div>
                <div className='justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-lg-block'></img>
                    <img src={Tutorial1} className='d-none d-lg-block'></img>
                </div>
            </div>
            <div>
                <div className='justify-content-between d-flex'>
                    <img src= {Tutorial2} className='d-none d-lg-block'></img>
                    <img src= {Tutorial3} className='d-none d-lg-block'></img>
                </div>
                <div className='row vh-100 mx-5 justify-content-center  '>
                    <div className='col-5 '>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img src={T4}></img>
                            <div className='fw-bolder align-self-center '>Edite seu arquivo</div>
                        </div>
                        <div className='m-5 align-items-center '>
                            <span className='d-block text-center'>Logo após, o desenvolvedor pode editar o arquivo como preferir para adicionar suas informações ou editar partes do Documento!

Portanto, o seu arquivo ficará do formato que desejar e com as informações que você considera relevante.</span>
                        
                        </div>
                    </div>
                    <div className='col-5'>
                        <img alt='imagem' className='border'></img>
                    </div>
                </div>
                <div className='justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-lg-block'></img>
                    <img src={Tutorial1} className='d-none d-lg-block'></img>
                </div>
            </div>
            <div>
                <div className='justify-content-between d-flex'>
                    <img src= {Tutorial2} className='d-none d-lg-block'></img>
                    <img src= {Tutorial3} className='d-none d-lg-block'></img>

                </div>
                <div className='row vh-100 mx-5 justify-content-center  '>
                    <div className='col-5 '>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img src={T5}></img>
                            <div className='fw-bolder align-self-center '>Baixe o seu trabalho</div>
                        </div>
                        <div className='m-5 align-items-center '>
                            <span className='d-block text-center'>Por fim, o seu Documento de Requisitos está pronto e disponível para o download!</span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <img alt='imagem' className='border'></img>
                    </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>
            <Rodape/>
        </div>
    )
}