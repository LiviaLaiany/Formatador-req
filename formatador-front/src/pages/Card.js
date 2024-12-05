import '../css/Card.css';
export default function Card({ icon, title, text, buttonClass }) {
    return (
        <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
            <div className="card-container">
                <div className="card shadow">
                    <div className="card-header">
                        <img src={icon} alt={`Ícone ${title}`} height="40" className="me-2" />
                        <span>{title}</span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{text}</p>
                        <div className="text-center">
                            <button className={buttonClass}>Clique Aqui</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}