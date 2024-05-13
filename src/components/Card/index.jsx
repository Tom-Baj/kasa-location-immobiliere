import { Link } from 'react-router-dom'


function Card({ logements }) {
     return (
          <div className="logements-container">
               {logements.map((logement) => (
                    <Link
                         to={`/fiche_logement/${logement.id}`}
                         className="card-content"
                         key={logement.id}
                    >
                         <img className="card-image" src={logement.cover} alt={logement.title} />
                         <div className="card-title">{logement.title}</div>
                    </Link>
               ))}
          </div>
     )
}

/* function Card({ logements }) {
     return (
          <div className="logements-container">
               {logements.map((logement) => (
                    <div
                         className="card-content"
                         key={logement.id}
                         onClick={(e) => (window.location.href = `/fiche_logement/${logement.id}`)}
                    >
                         <img className="card-image" src={logement.cover} alt={logement.title} />
                         <div className="card-title">{logement.title}</div>
                    </div>
               ))}
          </div>
     )
} */

export default Card
