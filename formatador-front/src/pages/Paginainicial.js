import './paginainicial.css';
export default function Paginainicial(){
    return(
        <div>
            <div  style={{paddingTop:'10%'}} className='vh-100 justify-content-center ' id='image'>
                <span className='align-self-center'>Formatador de Documentos de Requisitos</span>
                <div>
                    <button className='btn btn-light'>Login</button>
                    <button className='btn btn-light'>Cadastro</button>
                </div>
            </div>
            <div className='vh-100' id='box-2'>
                <div className='row'>
                    <span>Saiba Mais</span>
                    
                </div>

            </div>
        </div>
    )
}