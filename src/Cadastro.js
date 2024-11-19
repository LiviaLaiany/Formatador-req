import './Cadastro.css';
import logo from "./F.svg"; 
import fundo1 from "./fundo.png";
import fundo2 from "./fundo2.png";
export default function Tela(){
  return(
    <div className="row w-100 h-100 ">
      <div className="col-sm h-auto justify-content-center d-flex" id="back">
        <img src={fundo2} className="position-fixed fixed-bottom w-25 img-fluid" alt="fundo"></img>
        <img src={fundo1} className="position-fixed fixed-top img-fluid w-25"  alt="fundo"></img>
        <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid w-50" alt="logo"></img>
      </div>
      <div className="col-sm vh-100 pt-5" id="back2">
        <div className="d-flex mb-5  pt-2 justify-content-center align-items-center w-50 fs-1 fw-bold rounded text-center mx-auto" id="nome" style={{ minHeight: '50px' }}>
            <p>Cadastre-se</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center ">
            <input for="nome" placeholder="Nome" className="form-control mt-2 w-50" />
            <input for="email" placeholder="exemplo@dominio.com" className="form-control mt-2 w-50" />
            <input for="senha" placeholder="Senha" className="form-control mt-2 w-50" />
        </div>

        <div className='mt-5 d-flex  align-items-center justify-content-center  '>
            <button className="btn btn-primary align-self-center w-25 rounded-pill m-3" id="enviar">Enviar</button>
            <button className="btn align-self-center w-30 rounded-pill" id= "volte">Voltar para página inicial</button>
        </div>
        
      </div>
    </div>
  )
}