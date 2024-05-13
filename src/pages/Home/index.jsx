import Banniere from '../../components/Banniere'
import Card from '../../components/Card'
import logements from '../../assets/data/logements.json'
import paysage from '../../assets/images/paysage1.jpg'


function Home() {
     return (
          <div id='home'>
               <Banniere paysage={paysage} id='home'/>
               <Card logements={logements}/> 
          </div>
     );
}

export default Home;
