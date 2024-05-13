import { NavLink } from 'react-router-dom'

function Nav() {
     return (
          <nav>
               <ul className='liste-links'>
                    <li>
                         <NavLink to="/" className="nav-link">
                              Accueil
                         </NavLink>
                    </li>
                    <li>
                         <NavLink to="/about" className="nav-link">
                              A Propos
                         </NavLink>
                    </li>
               </ul>
          </nav>
     )
}

export default Nav
