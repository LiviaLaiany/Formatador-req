import Nav from './Navbar.js';
import './Tutorial.css';
import passos from '../imagens/passos.svg';
import TutorialImage from '../imagens/Tutorial.svg';
import Tutorial1 from '../imagens/Tutorial1.svg';
import T1 from '../imagens/1.svg';
import Teste from '../imagens/Teste.svg';
import Tutorial2 from '../imagens/Tutorial2.svg';
import Tutorial3 from '../imagens/Tutorial3.svg';
import T2 from '../imagens/T2.svg';
import T3 from '../imagens/T3.svg';
import T4 from '../imagens/T4.svg';
import T5 from '../imagens/T5.svg';
import Rodape from './Rodape.js';
import Cadastro from '../imagens/Cadastro.PNG';
import Criar from '../imagens/Criar.PNG';

export default function Tutorial(){
    return(
        <div >
            <Nav text = "Tutorial"/>

            <div className="mt-5">
                <div className="row justify-content-center align-items-center">
                    <img src={passos} className='img-fluid'></img>
                    {/* <img src={Teste} className='img-fluid mx-0 my-0 px-0'></img> */}
                </div>
                <div className='justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                    <img src={Tutorial1} className='d-none d-sm-block'></img>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <img src={T1} alt="Step Icon" className="me-3"></img>
                            <h2 className="fw-bolder">Cadastre-se</h2>
                        </div>
                        <p className="text-center mt-4">
                            Para acessar as funcionalidades do nosso site é necessário que haja um cadastro com e-mail válido e senha.
                        </p>
                        <p className="text-center">
                            Ao se cadastrar, os seus Documentos já editados serão salvos na sua conta. Assim, se necessário poderá acessá-los.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={Cadastro} alt="Cadastro" className="img-fluid border rounded"></img>
                    </div>
                </div>

                {/* div passo 2,3,4,5 */}
            </div>

            {/* <div className=''>
                <div className='background d-flex align-items-center justify-content-center mt-5'> 
                    <img src={passos} className='img-fluid'></img>
                </div>
                <div className='justify-content-between d-flex'>
                    <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                    <img src={Tutorial1} className='d-none d-sm-block'></img>
                </div>
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2}></img>
                        <img src= {Tutorial3}></img>

                    </div>
                    <div className='row vh-100 mx-5 justify-content-center  '>
                        <div className='col-5 '>
                            <div className='d-flex justify-content-start align-items-center'>
                                <img src={T1}></img>
                                <div className='fw-bolder align-self-center '>Cadastre-se</div>
                            </div>
                            <div className='m-5 align-items-center '>
                                <span className='d-block text-center'>Para acessar as funcionalidades do nosso site é necessário que haja um cadastro com e-mail válido e senha.</span>
                                <span className='d-block text-center'>Ao se cadastrar, os seus Documentos já editados serão salvos na sua conta. Assim, se necessário poderá acessá-los.</span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <img alt='imagem' className='border rounded ' src={Cadastro}></img>
                        </div>
                    </div>
                    <div className='justify-content-between d-flex'>
                        <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                        <img src={Tutorial1} className='d-none d-sm-block'></img>
                    </div>                
                </div>
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2}></img>
                        <img src= {Tutorial3}></img>

                    </div>
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
                        <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                        <img src={Tutorial1} className='d-none d-sm-block'></img>
                    </div>
                    
                    
                </div>
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2}></img>
                        <img src= {Tutorial3}></img>

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
                        <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                        <img src={Tutorial1} className='d-none d-sm-block'></img>
                    </div>
                    
                    
                </div>
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2}></img>
                        <img src= {Tutorial3}></img>

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
                        <img src={TutorialImage} className='img-fluid d-none d-sm-block'></img>
                        <img src={Tutorial1} className='d-none d-sm-block'></img>
                    </div>
                    
                    
                </div>
                <div>
                    <div className='justify-content-between d-flex'>
                        <img src= {Tutorial2}></img>
                        <img src= {Tutorial3}></img>

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
                        </div>
                    </div>
                </div>
            </div> */}
            <Rodape/>
        </div>
    )
}