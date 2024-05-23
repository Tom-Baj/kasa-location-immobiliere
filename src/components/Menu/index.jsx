import { useState } from 'react'

function Menu({ items, id }) {
     const [listeActive, setListeActive] = useState(null)
     return (
          <div>
               <div className={id === 'about' ? 'menu-container' : 'menu-container__logement'}>
                    {items.map((item) => (
                         <div className="menu-content" key={item.id}>
                              <div className="menu-header">
                                   <p className="menu-titre">{item.label}</p>
                                   <span
                                        className="menu-button"
                                        onClick={() => {
                                             setListeActive(
                                                  listeActive === item.id ? null : item.id
                                             )
                                        }}
                                   >
                                        <i
                                             className={`fa-solid fa-chevron-up icon-fleche ${
                                                  listeActive === item.id ? 'rotate-icon' : ''
                                             }`}
                                        ></i>
                                   </span>
                              </div>
                              {listeActive === item.id ? (
                                   <div className="zone-texte">
                                        {item.label === "Équipements" ? <ul></ul> : null}
                                        <p className="menu-texte">{item.texte}</p>
                                   </div>
                              ) : null}
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Menu
