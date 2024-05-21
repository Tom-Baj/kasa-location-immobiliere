function Banniere({ paysage, id }) {
     return (
          <div className="banniere-container">
               <img
                    className="banniere-container__paysage"
                    src={paysage}
                    alt="photographie paysage"
               />
               {id === 'home' ? (
                    <div className="banniere-container__masque masque-1">
                         <p className="banniere-container__titre">
                              Chez vous,{' '}
                              <span className="banniere-container__titre--saut-de-ligne">
                                   partout et ailleurs
                              </span>
                         </p>
                    </div>
               ) : (
                    <div className="banniere-container__masque masque-2"></div>
               )}
          </div>
     )
}

export default Banniere
