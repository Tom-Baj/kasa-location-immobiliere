
function Host({ logement }) {
    return (
        <div className="host-container">
            <p className="host-container__name">{logement.host.name}</p>
            <img className="host-container__photo" src={logement.host.picture} alt={logement.host.name}></img>
        </div>
    );
}

export default Host;