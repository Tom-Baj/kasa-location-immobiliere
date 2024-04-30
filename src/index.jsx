import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from './pages/Home/'
import FicheLogement from './pages/FicheLogement/'
import Error from './pages/Error/'
import Apropos from './pages/About/'

ReactDOM.render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/fiche_logement" element={<FicheLogement />} />
                    <Route path="/about" element={<Apropos />} />
                    <Route path="*" element={<Error />} />
               </Routes>
          </Router>
     </React.StrictMode>,
     document.getElementById('root')
)
