import Nav from './Navbar.js';
import '../css/Tutorial.css';
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
        <div className="px-0 mx-0">
            <Nav text = "Tutorial"/>
            <div className='container-fluid mx-0 px-0 mb-0 p-0'>
                <div className='row px-0'>
                    <div className='col-12 background d-flex align-items-center justify-content-center mt-5'> 
                        <img src={passos} className='img-fluid'></img>
                    </div>
                </div>
                <div className='row px-0'>
                    <div className='col-12 d-none d-lg-flex justify-content-between'>
                        <img src={TutorialImage} className='d-none d-lg-block'></img>
                        <img src={Tutorial1} className='d-none d-lg-block'></img>
                    </div>
                </div>
                <div className='row px-0'>
                    <div className='col-12 d-none d-lg-flex justify-content-between'>
                        <img src= {Tutorial2} className='d-none d-lg-block'></img>
                        <img src= {Tutorial3} className='d-none d-lg-block'></img>
                    </div>
                </div>
<<<<<<< HEAD
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
=======
>>>>>>> 2ebbf2b470d83a1f210d11115a035c88fff55343

                <div className='row px-0'>
                    <div className='col-12 col-lg-6 p-0'>
                        <div className='row'>
                            <div className='d-flex justify-content-center fw-bolder align-self-center '> 
                                <img src={T1}></img> 
                                <span>Cadastre-se</span>
                            </div>
                        </div>
                        <div className='row p-2 d-flex align-items-center '>
                            <span className='d-block text-center'>Para acessar as funcionalidades do nosso site é necessário que haja um cadastro com e-mail válido e senha.</span>
                            <span className='d-block text-center'>Ao se cadastrar, os seus Documentos já editados serão salvos na sua conta. Assim, se necessário poderá acessá-los.</span>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center p-0'>
                        <img alt='imagem' className='border rounded' src={Cadastro} ></img>
                    </div>
                </div>
                
                {/* <div className='row'>
                    <div className='col-12'>
                        
                    
                       
                        <div className='row vh-100 mx-5 d-flex justify-content-center  '>
                            <div className='col-6 d-flex justify-content-start align-items-center'>
                                <img src={T1}></img>
                                <div className='fw-bolder align-self-center '>Cadastre-se</div>
                            </div>

                            <div className='m-5 align-items-center '>
                                <span className='d-block text-center'>Para acessar as funcionalidades do nosso site é necessário que haja um cadastro com e-mail válido e senha.</span>
                                <span className='d-block text-center'>Ao se cadastrar, os seus Documentos já editados serão salvos na sua conta. Assim, se necessário poderá acessá-los.</span>
                            </div>
                            <div className='col-5'>
                                <img alt='imagem' className='border rounded' src={Cadastro} ></img>
                            </div>
                        </div>
                        <div className='row justify-content-between d-flex'>
                            <img src={TutorialImage} className='img-fluid d-none d-lg-block'></img>
                            <img src={Tutorial1} className='d-none d-lg-block'></img>
                        </div>  
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