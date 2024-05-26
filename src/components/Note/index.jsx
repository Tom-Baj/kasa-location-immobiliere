function Note({ valeur }) {
     const etoiles = []

     for (let i = 0; i < 5; i++) {
          if (i < valeur) {
               etoiles.push(<span key={i} className="note-container__etoile--red"><i className="fa-solid fa-star"></i></span>);
          } else {
               etoiles.push(<span key={i} className="note-container__etoile--grey"><i className="fa-solid fa-star"></i></span>
          )
          }
     }
     
     return (
          <div className="note-container">{etoiles}</div>

     )
}

export default Note