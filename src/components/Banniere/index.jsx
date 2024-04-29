import paysage from '../../assets/images/paysage1.jpg'

function Banniere() {
     return (
          <div className="home-banniere">
               <h1 className="titre-banniere">Chez vous, partout et ailleurs</h1>

               <img className="paysage-banniere" src={paysage} alt="paysage maritime" />
          </div>
     )
}

export default Banniere