function Banniere({ paysage, id }) {
     return (
          <div className="home-banniere">
               <img className="paysage-banniere" src={paysage} alt="photographie paysage" />
               {id === 'home' ? (
                    <p className="titre-banniere">Chez vous, <span className="saut-de-ligne">partout et ailleurs</span></p>
               ) : null}
               <div className="masque"></div>
          </div>
     )
}

export default Banniere
