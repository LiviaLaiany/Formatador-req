import Nav from './Navbar.js';
import './Formatador.css';

export default function Formatador(){
    return(
        <div>
            <Nav text = "Formatador"/>
            <div>
                <div className='d-flex justify-content-between p-4'>
                    <span className='fw-bold'>Criar novo documento</span>
                    <span className='fw-bold'>Galeria de modelos </span>
                </div>
                
                <div className='row d-flex justify-content-center w-100'> 
                    <div id='cria ' className='col-3 border border-dark'  style={{ width: '150px', height: '200px' }}></div>
                    <div className='col-1'></div>
                    <div className='border border-dark text-black col-3 d-flex align-items-center justify-content-center' style={{ width: '150px', height: '200px' }}>Modelo</div>
                    <div  className='col-1'></div>
                    <div className='col-3 border d-flex align-items-center justify-content-center border-dark'  style={{ width: '150px', height: '200px' }}>Modelo</div>
                    <div  className='col-1'></div>
                    <div className='col-3 border d-flex align-items-center justify-content-center border-dark'  style={{ width: '150px', height: '200px' }}>Modelo</div>
                
                </div>
                
            </div>
            <form>
                <div className='row d-flex justify-content-between w-100'>
                    <div id='Documentos' className='rounded m-5 col-5 ' style={{ width: '570px', height: '300px' }}>
                        <span style={{backgroundColor:'#00617D'}}  className='rounded  text-light d-block text-center my-2 w-25'>Meus Documentos</span>
                        <div  className='  d-flex justify-content-between ' style={{ width: '550px', height: '250px' }}>
                            <div className='border border-dark my-3 mx-2 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 bg-light text-black  d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                            <div className='border border-dark my-3 mx-2 bg-light text-black d-flex align-items-center justify-content-center w-25 h-75'>Modelo</div>
                        </div>
                    </div>
                    
                    <div id='Modelos' className='rounded m-5 col-5 ' style={{ width: '570px', height: '300px' }}>
                        <span style={{backgroundColor:'#99DBFB'}}  className='rounded d-block text-center my-2 w-25  '>Meus Modelos</span>
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