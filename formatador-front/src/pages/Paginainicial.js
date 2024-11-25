import './paginainicial.css';
import Nav from './Navbar.js';
import fundo2 from  '../imagens/fundo2.svg';
import nome from '../imagens/nome.mp4';
import video1 from '../imagens/video1.mp4';
import video2 from '../imagens/video2.mp4';
import video3 from '../imagens/video3.mp4';
import video5 from '../imagens/video5.mp4';

import { Link } from 'react-router';
export default function Paginainicial(){
    
    return(
        <div>
            {/* <Nav text="PaginaInicial"/> */}
            <div  className='vh-100 ' id='box'>
                <div className='d-flex py-3 justify-content-between w-100'>
                    <video className='w-25 video' autoPlay loop muted>
                        <source src={video1} className='w-100 h-100 'type="video/mp4"></source>

                    </video>
                    <video className='w-25 video' autoPlay loop muted>
                        <source src={video3} className='w-100 h-100 'type="video/mp4"></source>

                    </video>
                </div>
                <div  className='d-flex align-items-center h-25 justify-content-center nome'>
                    <video className='w-75' autoPlay loop muted>
                        <source src={nome}   className='w-100 h-100 ' type="video/mp4"></source>
                    </video>
                </div>
                <div className='d-flex align-items-center justify-content-center  '>
                    
                    <button className='btn botoes mx-3 ' id='bt-1' >Acesse nosso Tutorial</button>
                    
                    <button className='btn botoes' id='bt-2'>Cadastre-se</button>
                </div>
                <div className='d-flex  justify-content-between w-100'>
                    <video className='w-25 video' autoPlay loop muted>
                        <source src={video5} className='w-100 h-100 'type="video/mp4"></source>

                    </video>
                </div>
                
            </div>
            
            {/* <div className=' my-2' id='box-2'>
                <div className='d-flex justify-content-center align-items-center '>
                    <span className='p-2  fs-2 my-3 texto-animado text-center' id='saibamais'>Saiba Mais</span>
                 </div>
                <div className='row vw-100'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                            <p>Um Documento de Requisitos, segundo o Devmedia, “delimita o escopo do conjunto de funcionalidades que um sistema deve prover, bem como descreve os atributos de qualidade que devem ser suportados.”, ou seja, é um documento que descreve as implementações de um sistema e o que ele deve suportar. 
                            </p>
                            <p>No processo de desenvolvimento, ele servirá para o programador saber de seu processo como também do progresso já feito. Além disso, um projeto dispõe de vários componentes, portanto, para melhorar o entendimento de todos, é necessário que haja um arquivo contendo todas as informações que deverão ser implementadas. 
                            </p>
                            <p>Como já foi dito, um documento de requisitos funciona como um norte para um sistema, porém, para a maioria dos trabalhadores da área é uma dificuldade fazê-lo. Com isso, para facilitar um processo que é primordial no desenvolvimento, realizamos um software que ajuda a realizar a formatação do qual. Sabe-se também que existem informações imprescindíveis e outras não para determinados projetos, o que muitas vezes confunde um engenheiro de software, portanto, este sistema irá ajudá-lo a organizar corretamente suas necessidades .
                            </p>
                            <p>Dessa forma, o site tem como objetivo ajudar você, desenvolvedor, a automatizar seu processo de documentação de requisitos. Nosso site Formatador de Requisitos disponibiliza modelos prontos para serem apenas implementados com as informações que você irá adicionar com seus dados, como escopo, nome, requisitos, entre outros. Além disso, disponibilizamos também a opção de configurar o arquivo do modo como quiser, adicionando ou não determinadas informações no seu Documento de Requisitos. 
                            </p>
                            <p>Faça o login no nosso site e aproveite já.
</p>
                    </div>  
                    <div className='col-3'></div> 
                </div>  

            </div> */}
        </div>
    )
}