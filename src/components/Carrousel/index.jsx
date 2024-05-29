import { useState } from 'react'

function Carrousel({ logement }) {
     const [image, setImage] = useState(0)
     const [length] = useState(logement.pictures.length)

     const clickRetour = () => {
          const newIndex = image - 1
          setImage(newIndex < 0 ? length - 1 : newIndex)
     }

     const clickSuivant = () => {
          const newIndex = image + 1
          setImage(newIndex >= length ? 0 : newIndex)
     }

     return (
          <div className="carrousel">
               <svg
                    className={logement.pictures.length <= 1 ? "carrousel__fleche--hidden" : "carrousel__fleche carrousel__fleche--gauche"}
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={clickRetour}
               >
                    <path
                         d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                         fill="white"
                         
                    />
               </svg>
               {logement.pictures.map((pictures, index) => (
                    <div
                         key={index}
                         style={{ backgroundImage: `url(${pictures})` }}
                         alt={logement.title}
                         className={
                              image === index
                                   ? 'carrousel__image carrousel__image--visible'
                                   : 'carrousel__image carrousel__image--hidden'
                         }
                    />
               ))}

               <svg
                    className={logement.pictures.length <= 1 ? "carrousel__fleche--hidden" : "carrousel__fleche carrousel__fleche--droite"}
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={clickSuivant}
               >
                    <path
                         d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                         fill="white"
                         
                    />
               </svg>

               <span className={logement.pictures.length > 1 ? "carrousel__indicateurs" : "carrousel__indicateurs--hidden"}>
                    <span
                         className={
                              image === 0
                                   ? 'carrousel__indicateur carrousel__indicateur--active'
                                   : 'carrousel__indicateur'
                         }
                         key={0}
                    >{`${image + 1}/${logement.pictures.length}`}</span>
               </span>
          </div>
     )
}

export default Carrousel
