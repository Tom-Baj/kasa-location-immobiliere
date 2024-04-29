import { Link } from 'react-router-dom'

function Nav() {
     return (
          <nav>
               <Link to="/" className='nav-link'>Accueil</Link>
               <Link to="/about" className='nav-link'>A Propos</Link>
          </nav>
     )
}

export default Nav
