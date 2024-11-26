import logo from "../imagens/FDR-preto.svg"; 
import React, {useLayoutEffect, useState, } from 'react';
import './Navbar.css';
export default function Nav(props){
    const [TutStyle, setTutStyle] = useState({});
    const [FormStyle, setFormStyle] = useState({});
    const [Display, setDisplay] = useState({});
 
    useLayoutEffect(() => {
        if(props.text === "Tutorial"){
            setTutStyle({backgroundColor : '#68BBE4', color:'white'});
            setFormStyle({});
        } else if (props.text === "Formatador" ){
            setFormStyle({backgroundColor : '#68BBE4', color: 'white'});
            setTutStyle({}); 
            setDisplay({display: 'none'})
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
                                <a className="nav-link fs-5 m-2 fw-bold " style= {FormStyle}  href="#">Formatador</a>
                            </li>
                            <li className="nav-item rounded quadrado" style= {TutStyle}>
                            <a className="nav-link fs-5 m-2 fw-bold " style= {TutStyle} href="#" >Tutorial</a>
                            </li>
                            <li class="nav-item rounded quadrado">
                            <a className="nav-link fs-5 m-2 fw-bold" style= {Display} href="#">Cadastro</a>
                            </li>
                            <li class="nav-item rounded quadrado">
                            <a className="nav-link fs-5 m-2 fw-bold" style= {Display} href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}