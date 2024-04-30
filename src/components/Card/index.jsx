function Card({ logements }) {
     return (
          <div className="logements-container">
               {logements.map((logement) => (
                    <div className="card-content" key={logement.id}>
                        <img className="card-image" src={logement.cover} alt={logement.title} />
                        <div className="card-title">{logement.title}</div>
                    </div>
               ))}
          </div>
     );
}

export default Card;
