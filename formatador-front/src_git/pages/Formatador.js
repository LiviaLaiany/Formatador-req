import Nav from './Navbar.js';
import './Formatador.css';
import mais from '../imagens/mais.svg';

export default function Formatador(){
    return(
        <div>
            <Nav text = "Formatador"/>
            <div style= {{backgroundColor:'#ebebeb'}} className="pb-3   ">
                <div className='d-flex justify-content-between p-4'>
                    <span className='fw-bold'>Criar novo documento</span>
                    <span className='fw-bold'>Galeria de modelos </span>
                </div>
                
                <div className='row d-flex justify-content-center w-100  ' style={{height:'200px'}}> 
                    <div id='cria ' className='col-3 col-sm-1  border border-dark bg-light d-flex align-items-center justify-content-center' ><img src={mais}></img></div>
                    <div  className='d-none d-sm-block col-1'></div>
                    <div className='border d-none d-md-flex border-dark text-black col-1 d-flex align-items-center justify-content-center bg-light'>Modelo</div>
                    <div  className='d-none d-sm-block col-1'></div>
                    <div className='col-1 border d-none d-md-flex  align-items-center justify-content-center border-dark bg-light' >Modelo</div>
                    <div  className='d-none d-sm-block col-1'></div>
                    <div className='col-1 border d-none d-sm-none d-md-flex  align-items-center justify-content-center border-dark bg-light'  >Modelo</div>
                    <div  className='d-none d-sm-none d-md-block col-1'></div>
                    <div className='col-1 border d-none d-md-flex align-items-center justify-content-center border-dark bg-light'  >Modelo</div>
                    <div  className='d-none d-sm-none d-md-block col-1'></div>
                    <div className='col-1 border d-none d-sm-none d-md-flex align-items-center justify-content-center border-dark bg-light'  >Modelo</div>
                
                </div>
                
            </div>
            <form>
                <div className='row d-flex justify-content-between w-100'>
                    <div id='Documentos' className='rounded m-5 col-5 ' style={{ height: '40%' }}>
                        <span style={{backgroundColor:'#00617D'}}  className='rounded  text-light d-block text-center my-2 w-25 fs-5'>Meus Documentos</span>
                        <div  className='  d-flex justify-content-between ' style={{ width: '550px', height: '250px' }}>
                            <div className='border border-dark my-3 mx-2 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                        </div>
                    </div>
                    
                    <div id='Modelos' className='rounded m-5 col-5 ' style={{  height: '40%' }}>
                        <span style={{backgroundColor:'#99DBFB'}}  className='rounded d-block text-center my-2 w-25 fs-5 '>Meus Modelos</span>
                        <div  className='  d-flex justify-content-between ' style={{ width: '550px', height: '250px' }}>
                            <div className='border border-dark my-3 mx-2 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}