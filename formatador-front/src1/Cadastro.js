import './Cadastro.css';
import logo from "./imagens/FDR.svg"; 
import fundo1 from "./imagens/fundo.svg";
import fundo2 from "./imagens/fundo2.svg";
export default function Tela(){
  return(
    
    <div className="row w-100 h-100 ">
        <div className="col-sm h-auto justify-content-center d-flex" id="back">
            <img src={fundo2} className="position-fixed fixed-bottom img-fluid" alt="fundo"></img>
            <img src={fundo1} className="position-fixed fixed-top img-fluid w-25"  alt="fundo"></img>
            <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid w-50" alt="logo"></img>
        </div>
        <div className="col-sm vh-100 pt-5 d-flex justify-content-center align-items-center" id="back2">
            <div className="text-center" style={{ width: '100%', maxWidth: '400px' }}>
                <div className="d-flex mb-5 pt-2 justify-content-center align-items-center w-100 fs-1 fw-bold rounded text-center mx-auto" id="nome" style={{ minHeight: '50px' }}>
                    <p>Cadastre-se</p>
                </div>
            
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <input  placeholder="Nome" className="form-control mt-2 w-100" />
                    <input id="email" placeholder="exemplo@dominio.com" className="form-control mt-2 w-100" />
                    <input id="senha" placeholder="Senha" className="form-control mt-2 w-100" />
                </div>

                <div className="mt-5 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary w-25 rounded-pill m-3" id="enviar">Enviar</button>
                    <button className="btn w-30 rounded-pill" id="volte">Voltar para página inicial</button>
                </div>
            </div>
        </div>

    </div>
  )
}