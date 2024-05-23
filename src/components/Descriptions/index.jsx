import React, { useState } from 'react';

function Descriptions({ logement }) {
    const [listeActive, setListeActive] = useState(null);

    return (
        <div className="menu-container">
            <div className="menu-container__content">
                <div className="menu-container__header">
                    <p className="menu-container__header--title">Description</p>
                    <span
                        className="menu-container__header--button"
                        onClick={() => setListeActive(listeActive === logement.id ? null : logement.id)}
                    >
                        <i className={`fa-solid fa-chevron-up icon-fleche ${listeActive === logement.id ? 'rotate-icon' : ''}`}></i>
                    </span>
                </div>
                {listeActive === logement.id && (
                    <div className="menu-container__text-zone">
                        <p className="menu-container__text-zone--text">{logement.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Descriptions;