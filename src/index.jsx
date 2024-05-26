import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Header from './components/Header/'
import Footer from './components/Footer/'
import Home from './pages/Home/'
import FicheLogement from './pages/FicheLogement/'
import Error from './pages/Error/'
import Apropos from './pages/About/'

createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Router>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/fiche_logement/:id" element={<FicheLogement />} />
                    <Route path="/about" element={<Apropos />} />
                    <Route path="*" element={<Error />} />
               </Routes>
               <Footer />
          </Router>
     </React.StrictMode>,
)