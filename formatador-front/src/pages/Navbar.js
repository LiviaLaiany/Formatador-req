import React, {useLayoutEffect, useState, } from 'react';
import logo from "../imagens/FDR-preto.svg"; 
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Nav(props){
    const [TutStyle, setTutStyle] = useState({});
    const [FormStyle, setFormStyle] = useState({});
    const [Display, setDisplay] = useState({});
    const [InicialStyle, setInicialStyle] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    useLayoutEffect(() => {
        if(props.text === "Tutorial"){
            setTutStyle({backgroundColor : '#68BBE4', color:'white'});
            setFormStyle({});
        } else if (props.text === "Formatador" ){
            setFormStyle({backgroundColor : '#68BBE4', color: 'white'});
            setTutStyle({}); 
            setInicialStyle({});
            setDisplay({display: 'none'});
        }else if(props.text === "PaginaInicial") {
            setInicialStyle({backgroundColor: '#68BBE4', color: 'white'});
            setFormStyle({display:'none'});
        }
    }, [props.text]);
    
    return(
            <nav class="navbar navbar-expand-lg rounded fixed-sm-top" id="nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top"></img>
                    </a>
                    <button class="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse ${ isMenuOpen ? "show justify-content-start" : "collapse justify-content-end"}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item rounded quadrado" style={InicialStyle}>
                            <Link to={"/"} className="nav-link fs-5 m-2 fw-bold">
                                Página Inicial
                            </Link>
                            </li>
                            <li className="nav-item rounded quadrado" style={FormStyle}>
                            <Link to={"/formatador"} className="nav-link fs-5 m-2 fw-bold">
                                Formatador
                            </Link>
                            </li>
                            <li className="nav-item rounded quadrado" style={TutStyle}>
                            <Link to={"/tutorial"} className="nav-link fs-5 m-2 fw-bold">
                                Tutorial
                            </Link>
                            </li>
                            <li className="nav-item rounded quadrado" style={Display}>
                            <Link to={"/register"} className="nav-link fs-5 m-2 fw-bold">
                                Cadastro
                            </Link>
                            </li>
                            <li className="nav-item rounded quadrado" style={Display}>
                            <Link to={"/login"} className="nav-link fs-5 m-2 fw-bold">
                                Login
                            </Link>
                            </li>
                        </ul>
                    </div>
                 </div>
            </nav>
    )
}