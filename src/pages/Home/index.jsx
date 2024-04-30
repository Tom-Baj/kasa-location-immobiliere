import Header from '../../components/Header'
import Banniere from '../../components/Banniere'
import Footer from '../../components/Footer'
import Card from '../../components/Card';
import logements from '../../assets/data/logements.json'




function Home() {
     return (
          <div>
               <Header />
               <Banniere />
               <Card logements={logements}/> 
               <Footer />
          </div>
     );
}

export default Home;
