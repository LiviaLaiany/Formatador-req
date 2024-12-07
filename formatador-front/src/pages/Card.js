import React, { useState } from 'react';
import '../css/Card.css';

export default function Card({ icon, title, text, buttonClass }) {
    const [isExpanded, setIsExpanded] = useState(false); // Estado para expandir o texto

    const toggleExpand = () => setIsExpanded(!isExpanded); // Alterna o estado

    return (
        <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
            <div className="tutorial-card-container">
                <div className="texto-card-tutorial shadow">
                    <div className="tutorial-card-header">
                        <img src={icon} alt={`Ícone ${title}`} height="40" className="me-2" />
                        <span>{title}</span>
                    </div>
                    <div className="tutorial-card-body">
                        {/* Verifica se o texto está expandido */}
                        <p className="tutorial-card-text">
                            {isExpanded ? text : `${text.substring(0, 100)}...`}
                        </p>
                        {!isExpanded && (
                            <button className="tutorial-read-more-btn" onClick={toggleExpand}>
                                Ler mais
                            </button>
                        )}
                        {isExpanded && (
                            <button className="tutorial-read-more-btn" onClick={toggleExpand}>
                                Ler menos
                            </button>
                        )}
                    </div>
                    {/* <div className="text-center">
                        <button className={buttonClass}>Clique Aqui</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}