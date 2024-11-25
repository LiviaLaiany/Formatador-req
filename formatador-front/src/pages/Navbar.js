import logo from "../imagens/FDR-preto.svg"; 
import React, {useLayoutEffect, useState, } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Nav(props){
    const [TutStyle, setTutStyle] = useState({});
    const [FormStyle, setFormStyle] = useState({});
    const [Display, setDisplay] = useState({});
    const [InicialStyle, setInicialStyle] = useState({});
 
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
        <div>
            <nav class="navbar navbar-expand-lg rounded  fixed fixed-top   " id="nav" >
                <div class="container-fluid  ">
                    <a class="navbar-brand quadrado rounded" href="#">
                        <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top"></img>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end d-flex d-none d-sm-none d-md-none d-lg-none d-lx-none d-xxl-block " id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item rounded quadrado" style= {InicialStyle}>
                                <Link to={'/paginainicial'}>
                                    <a className="nav-link fs-5 m-2 fw-bold " style= {InicialStyle}  href="#">Página Inicial</a>
                                </Link>
                            </li>
                            <li class="nav-item rounded quadrado" style= {FormStyle}>
                                <Link to={'/formatador'}>
                                    <a className="nav-link fs-5 m-2 fw-bold " style= {FormStyle}  href="#">Formatador</a>
                                </Link>
                            </li>
                            <li className="nav-item rounded quadrado" style= {TutStyle}>
                                <Link to={'/tutorial'}>
                                    <a className="nav-link fs-5 m-2 fw-bold " style= {TutStyle} href="#" >Tutorial</a>
                                </Link>
                            </li>
                            <li class="nav-item rounded quadrado">
                                <Link to={'/register'}>
                                    <a className="nav-link fs-5 m-2 fw-bold " style= {Display} href="#">Cadastro</a>
                                </Link>
                            </li>
                            <li class="nav-item rounded quadrado">
                                <Link to={'/login'}>
                                    <a className="nav-link fs-5 m-2 fw-bold " style= {Display} href="#">Login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}