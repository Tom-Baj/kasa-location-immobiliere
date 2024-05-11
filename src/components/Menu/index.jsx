import React, { useState } from 'react'

function Menu({ aboutLists }) {
     const [listeActive, setListeActive] = useState(null)
     return (
          <div className="menu-container">
               {aboutLists.map((aboutList) => (
                    <div className="menu-content" key={aboutList.id}>
                         <div className="menu-header">
                              <p className="menu-titre">{aboutList.titre}</p>
                              <span
                                   className="menu-button"
                                   onClick={() => {
                                        setListeActive(
                                             listeActive === aboutList.id ? null : aboutList.id
                                        )
                                   }}
                              >
                                   <i
                                        className={`fa-solid fa-chevron-up icon-fleche ${
                                             listeActive === aboutList.id ? 'rotate-icon' : ''
                                        }`}
                                   ></i>
                              </span>
                         </div>
                         {listeActive === aboutList.id ? (
                              <div className="zone-texte">
                                   {' '}
                                   <p className="menu-texte">{aboutList.texte}</p>
                              </div>
                         ) : null}
                    </div>
               ))}
          </div>
     )
}

export default Menu
