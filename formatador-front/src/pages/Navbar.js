import logo from "../imagens/FDR-preto.svg"; 
import React, {useLayoutEffect, useState, } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
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
            <nav class="navbar navbar-expand-lg rounded  fixed fixed-top   " id="nav" >
                <div class="container-fluid  ">
                    <a class="navbar-brand quadrado rounded" href="#">
                        <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top"></img>
                    </a>
                    <div class="collapse navbar-collapse justify-content-end d-flex d-none d-sm-none d-md-none d-lg-none d-lx-none d-xxl-block " id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item rounded quadrado" style= {FormStyle}>
                                <a className="nav-link fs-5 m-2 fw-bold d-none d-sm-block" style= {FormStyle}  href="#">Formatador</a>
                            </li>
                            <li className="nav-item rounded quadrado" style= {TutStyle}>
                                <a className="nav-link fs-5 m-2 fw-bold d-none d-sm-block" style= {TutStyle} href="#" >Tutorial</a>
                            </li>
                            <li class="nav-item rounded quadrado">
                                <Link to={'/register'}>
                                    <a className="nav-link fs-5 m-2 fw-bold d-none d-sm-block" style= {Display} href="#">Cadastro</a>
                                </Link>
                            </li>
                            <li class="nav-item rounded quadrado">
                                <Link to={'/login'}>
                                    <a className="nav-link fs-5 m-2 fw-bold d-none d-sm-block" style= {Display} href="#">Login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-block d-sm-none">
                        <div className="collapse navbar-collapse justify-content-end d-flex d-none d-sm-block" id="navbarNav">
                            <ul className="navbar-nav">
                            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}