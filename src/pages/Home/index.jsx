import Header from '../../components/Header'
import Banniere from '../../components/Banniere'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import logements from '../../assets/data/logements.json'
import paysage from '../../assets/images/paysage1.jpg'





function Home() {
     return (
          <div id='home'>
               <Header />
               <Banniere paysage={paysage} id='home'/>
               <Card logements={logements}/> 
               <Footer />
          </div>
     );
}

export default Home;
