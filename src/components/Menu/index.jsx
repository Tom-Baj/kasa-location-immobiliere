import React, { useState } from 'react'



function Menu({ aboutLists }) {
     const [listeActive, setListeActive] = useState(false)
     let id = useState(0);
     return (
          <div className="menu-container">
               {aboutLists.map((aboutList) => (
                    <div className="menu-content" key={aboutList.id}>
                         <p className="menu-titre">{aboutList.titre}</p>
                         <span className="menu-button" onClick={() =>  { setListeActive(!listeActive); id = aboutList.id}}>
                              {console.log(id)}
                              <i className="fa-solid fa-chevron-up"></i>
                         </span>
                         {listeActive ? <p className="menu-texte">{aboutLists[id[0]].texte}</p> : null}
                    </div>
               ))}
          </div>
     )
}

export default Menu
