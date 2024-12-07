import React, { useState } from 'react';
import '../css/Card.css';

export default function Card({ icon, title, text, buttonClass }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="col-12 col-lg-4 p-4 text-section d-flex flex-column justify-content-center align-items-center rounded-start">
            <div className="caixa card-container">
                <div className=" card1 card shadow">
                    <div className="card1-header card-header">
                        <img src={icon} alt={`Ícone ${title}`} height="40" className="me-2" />
                        <span>{title}</span>
                    </div>
                    <div className="card1-body card-body">
                        <p className={`card1-text ${isExpanded ? 'expanded' : ''}`}>
                            {isExpanded ? text : `${text.substring(0, 100)}...`}
                        </p>
                        <button className="read-more-btn" onClick={toggleExpand}>
                            {isExpanded ? 'Ler menos' : 'Ler mais'}
                        </button>
                    </div>
                    {/* <div className="text-center">
                        <button className={buttonClass}>Clique Aqui</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
