import logo from "./imagens/FDR-preto.svg"; 
import React, {useEffect, useState} from 'react';
import './Navbar.css';
export default function Nav(props){
    const [TutStyle, setTutStyle] = useState({});
    const [FormStyle, setFormStyle] = useState({});
    useEffect(() => {
        if(props.text === "Tutorial"){
            setTutStyle({backgroundColor : '#FFCC54'});
            setFormStyle({});
        } else if (props.text === "Formatador"){
            setFormStyle( {backgroundColor : '#FFCC54'});
            setTutStyle({}); 
        }
    }, [props.text]);
    
    return(
        <div>
            <nav class="navbar navbar-expand-lg rounded  " id="nav" >
                <div class="container-fluid  ">
                    <a class="navbar-brand quadrado rounded" href="#">
                        <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top"></img>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end d-flex" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item rounded quadrado" style= {FormStyle}>
                                <a className="nav-link fs-5 m-2 fw-bold "  href="#">Formatador</a>
                            </li>
                            <li className="nav-item rounded quadrado" style= {TutStyle}>
                            <a className="nav-link fs-5 m-2 fw-bold " href="#" >Tutorial</a>
                            </li>
                            <li class="nav-item rounded quadrado">
                            <a className="nav-link fs-5 m-2 fw-bold" href="#">Cadastro</a>
                            </li>
                            <li class="nav-item rounded quadrado">
                            <a className="nav-link fs-5 m-2 fw-bold" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}