import '../css/paginainicial.css';
import nome from '../imagens/nome.mp4';
import videologo from '../imagens/VideoLogo.mp4';
import fundo3 from "../imagens/fundo3.svg";
import { Link } from 'react-router-dom';
import {animateScroll} from 'react-scroll';

//RESPONSIVO E PRONTO
export default function Paginainicial(){
    const options = {
        // Your options here, for example:
        duration: 2000,
        delay:    10,            // Sem delay
      
        smooth: true,
      };
      
      // Scroll to 100 pixels from the top of the page
          animateScroll.scrollTo(1000, options);
      
    return(
        <div>
            
            <div  className='vh-100 ' id='box'>
                <div className='d-flex d-sm-flex d-none w-100'>
                    {/* <video className='w-25 video' autoPlay loop muted>
                        <source src={video5} className='w-100 h-100 'type="video/mp4"></source>
                    </video> */}
                    <div className='h-100'>
                        <img src={fundo3} className=" p-0 img-fluid h-100" alt="fundo"></img> 

                    </div>
                   
                    <div className='d-flex  justify-content-center w-100'id='logo'>
                        <video className=' w-sm-25 w-xxl-50 w-100 h-100 video'  autoPlay loop muted>
                            <source src={videologo} className='w-100 h-50 '  type="video/mp4"></source>
                        </video>
                    </div>
                    {/* <video className='w-25 video' autoPlay loop muted>
                        <source src={video3} className='w-100 h-100 'type="video/mp4"></source>
                    </video> */}
                </div>
                <div  className='d-flex mb-5 align-items-center h-25 justify-content-center nome'>
                    <video className=' w-100 w-sm-75' autoPlay loop muted>
                        <source src={nome}   className='w-100 h-100 ' type="video/mp4"></source>
                    </video>
                </div>
                <div className='d-flex align-items-center justify-content-center my-1 my-sm-5 '>
                    
                    <Link to={"/tutorial"} className='btn botoes mx-3 text-center  ' id='bt-1' >Acesse nosso Tutorial</Link>
                    
                    <Link to={"/register"} className='btn botoes text-center' id='bt-2'>Cadastre-se</Link>
                    <Link to={"/login"} className='btn botoes text-center mx-3' id='bt-3'>Login</Link>

                </div>
            </div>
        </div>
    )
}