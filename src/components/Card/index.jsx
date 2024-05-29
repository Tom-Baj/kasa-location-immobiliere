import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Card({ logements }) {
     const navigate = useNavigate()

     const handleClick = (id) => {
          navigate(`/error/`)
     }

     return (
          <div className="logements-container">
               {logements.map((logement) => (
                    <Link
                         to={`/fiche_logement/${logement.id}`}
                         className="logements-container__card"
                         key={logement.id}
                         onClick={handleClick}
                    >
                         <img
                              className="logements-container__card--image"
                              src={logement.cover}
                              alt={logement.title}
                         />
                         <div className="logements-container__card--title">{logement.title}</div>
                    </Link>
               ))}
          </div>
     )
}

export default Card
