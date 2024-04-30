import logements from '../../assets/data/logements.json'

function Card() {
     return (
          <div className="logements">
               {logements.map((logement) => (
                    <a href='#' className="card" key={logement.id} src={logement.cover}>
                         <img className="card-image" src={logement.cover} alt={logement.title} />
                         <h2 className="card-title">{logement.title}</h2>
                    </a>
               ))}
          </div>
     )
}

export default Card
