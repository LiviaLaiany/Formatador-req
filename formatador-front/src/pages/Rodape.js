import logo from "../imagens/FDR.svg"; 

export default function Rodape() {

    return (
        <footer className="bg-dark py-3 w-100 px-0">
            <ul className="nav justify-content-center border-bottom pb-3">
                <li className="nav-item align-items-center justify-content-center d-flex">
                    <img src={logo} className=" d-flex justify-content-center align-self-center text-light img-fluid w-50  d-sm-block" alt="logo"></img>
                </li>
            </ul>
            <p className="text-center text-light py-2">Desenvolvido por Ana Clara, Hemilly Hellen, Livia Laiany e Luis Henrique </p>
            <p className="text-center text-light">© 2024</p>
        </footer> 
    );
}
