import { useState } from 'react'

function Menu({ items, id }) {
     const [listeActive, setListeActive] = useState([])

     const iconActif = (itemId) => {
          if (listeActive.includes(itemId)) {
               setListeActive(listeActive.filter((id) => id !== itemId))
          } else {
               setListeActive(listeActive.concat(itemId))
          }
     }

     return (
          <div>
               <div className={`menu ${id === 'about' ? 'menu--about' : 'menu--logement'}`}>
                    {items.map((item) => (
                         <div
                              className={`menu__content ${
                                   id === 'about'
                                        ? 'menu__content--about'
                                        : 'menu__content--logement'
                              }`}
                              key={item.id}
                         >
                              <div
                                   className={`menu__content__header ${
                                        id === 'about'
                                             ? 'menu__content__header--about'
                                             : 'menu__content__header--logement'
                                   }`}
                              >
                                   <p className="menu__content__header__titre">{item.label}</p>
                                   <span
                                        className="menu__content__header__button"
                                        onClick={() => iconActif(item.id)}
                                   >
                                        <i
                                             className={`fa-solid fa-chevron-up menu__content__header__icon ${
                                                  listeActive.includes(item.id)
                                                       ? 'menu__content__header__icon--rotate'
                                                       : ''
                                             }`}
                                        ></i>
                                   </span>
                              </div>
                              {listeActive.includes(item.id) && (
                                   <div className="menu__content__text-zone">
                                        {Array.isArray(item.texte) ? (
                                             <ul className="menu__content__text-zone__list">
                                                  {item.texte.map((equipement, index) => (
                                                       <li
                                                            className="menu__content__text-zone__list-item"
                                                            key={index}
                                                       >
                                                            {equipement}
                                                       </li>
                                                  ))}
                                             </ul>
                                        ) : (
                                             <p className="menu__content__text-zone__texte">
                                                  {item.texte}
                                             </p>
                                        )}
                                   </div>
                              )}
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Menu
