import { useState } from 'react';

function Menu({ items, id }) {
    const [listeActive, setListeActive] = useState(null);

    return (
        <div>
            <div className={`menu ${id === 'about' ? 'menu--about' : 'menu--logement'}`}>
                {items.map((item) => (
                    <div className={`menu__content ${id === 'about' ? 'menu__content--about' : 'menu__content--logement'}`} key={item.id}>
                        <div className={`menu__content__header ${id === 'about' ? 'menu__content__header--about' : 'menu__content__header--logement'}`}>
                            <p className="menu__content__header__titre">{item.label}</p>
                            <span
                                className="menu__content__header__button"
                                onClick={() => {
                                    setListeActive(
                                        listeActive === item.id ? null : item.id
                                    );
                                }}
                            >
                                <i
                                    className={`fa-solid fa-chevron-up menu__content__header__icon ${
                                        listeActive === item.id ? 'menu__content__header__icon--rotate' : ''
                                    }`}
                                ></i>
                            </span>
                        </div>
                        {listeActive === item.id ? (
                            <div className="menu__content__text-zone">
                                {Array.isArray(item.texte) ? (
                                    <ul className="menu__content__text-zone__list">
                                        {item.texte.map((equipement, index) => (
                                            <li className="menu__content__text-zone__list-item" key={index}>
                                                {equipement}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="menu__content__text-zone__texte">{item.texte}</p>
                                )}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
