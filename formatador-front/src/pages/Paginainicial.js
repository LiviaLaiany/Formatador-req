import '../css/paginainicial.css';
import nome from '../imagens/nome.mp4';
import video1 from '../imagens/video1.mp4';
import video3 from '../imagens/video3.mp4';
import video5 from '../imagens/video5.mp4';
import Rodape from './Rodape.js';
import logo from '../imagens/FDR-preto.svg';

export default function Paginainicial(){
    
    return(
        <div>
            <div  className='vh-100 ' id='box'>
                <div className='d-flex d-sm-flex d-none py-3 justify-content-between w-100'>
                    <video className='w-25 video' autoPlay loop muted>
                        <source src={video1} className='w-100 h-100 'type="video/mp4"></source>
                    </video>
                    <video className='w-25 video' autoPlay loop muted>
                        <source src={video3} className='w-100 h-100 'type="video/mp4"></source>
                    </video>
                </div>
                <div  className='d-flex align-items-center h-25 justify-content-center nome'>
                    <video className=' w-100 w-sm-75' autoPlay loop muted>
                        <source src={nome}   className='w-100 h-100 ' type="video/mp4"></source>
                    </video>
                </div>
                <div className='d-flex align-items-center justify-content-center my-1 my-sm-5 '>
                    
                    <button className='btn botoes mx-3 text-center ' id='bt-1' >Acesse nosso Tutorial</button>
                    
                    <button className='btn botoes text-center' id='bt-2'>Cadastre-se</button>
                </div>
                <div className='d-flex h-25  justify-content-center w-100'>
                        <video className=' w-sm-25 w-xxl-50 w-75 video' autoPlay loop muted>
                            <source src={video5} className='w-100 h-100 'type="video/mp4"></source>
                        </video>
                </div>
                
            </div>
        </div>
    )
}