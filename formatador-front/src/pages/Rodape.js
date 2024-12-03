import logo from "../imagens/FDR.svg"; 
import './Rodape.css';

export default function Rodape() {

    return (

        <footer className="mt-5 w-100 py-0 mb-0 px-0">

            <div className="container">
                <div className="row justify-content-center border-bottom pb-3">
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <img 
                            src={logo} 
                            className="img-fluid" 
                            width="150" 
                            alt="logo"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="text-light py-2 fs-5">
                            Desenvolvido por Ana Clara, Hemilly Hellen, Livia Laiany e Luis Henrique
                        </p>
                        <p className="text-light fs-5">© 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
