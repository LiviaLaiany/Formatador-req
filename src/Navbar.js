import logo from "./F.svg"; 
import './Navbar.css';
export default function Nav(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg justify-content-end d-flex " id="nav" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="100px" className="d-inline-block align-text-top"></img>
                    </a>
                    <a class="navbar-brand" href="#">Formatador</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <div className="container mt-5">
      <div className="triangulo-container" style={{ position: 'relative', width: '100px', height: '100px' }}>
        <div
          className="triangulo"
          style={{
            width: '0',
            height: '0',
            borderLeft: '70px solid transparent',
            borderRight: '70px solid transparent',
            borderTop: '100px solid red', // Triângulo com ponta para baixo
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        ></div>
        <div
          className="texto text-center"
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          Tutorial
        </div>
      </div>
    </div>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Cadastro</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}