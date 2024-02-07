// App.js
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import LegalPage from './components/MentionPage';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import './App.css';

import EclairImage from './images/Eclair.png';
import Footer from './components/Footer';

function App() {
  const icon = <FontAwesomeIcon icon={faAngleRight} />; // Icône à utiliser

  return (
    <div className="App">
      <nav className='navbar'>
        <div className="left-section">
          <div className="prenom">John Doe</div>
        </div>
        <div className="right-section">
          <Link to="/"> Accueil</Link>
          <Link to="/Services"> Services</Link>
          <Link to="/réalisations"> Réalisations</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>

      {/* Ajoutez votre image Eclair sous l'en-tête */}
      <img src={EclairImage} alt="Eclair" className="eclair-image" />

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/réalisations" element={<PortfolioPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Legal" element={<LegalPage />} />
      </Routes>

      <Footer /> {/* Utilisation du Footer ici */}

      
    </div>
  );
}

export default App;
