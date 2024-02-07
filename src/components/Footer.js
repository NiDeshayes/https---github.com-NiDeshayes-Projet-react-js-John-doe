import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  const icon = <FontAwesomeIcon icon={faAngleRight} />;

  return (
    <footer className="footer">
      <div className="footer-column">
        <h4> John Doe</h4>
        <p> Adresse: 123 Rue du Code</p>
        <p> Téléphone: 0123456789</p>
        <div className="social-icons">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/johndoe/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Liens utiles</h4>
        <ul>
          <li><Link to="/">{icon} Accueil</Link></li>
          <li><Link to="/Services" >{icon} Services</Link></li>
          <li><Link to="/Contact">{icon} Me contacter</Link></li>
          <li><Link to="/Legal">{icon} Mentions légales</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Mes réalisations</h4>
        <ul>
          <li>{icon} <a href="#portfolio">Fresh Food</a></li>
          <li>{icon} <a href="#portfolio" >Restaurant Akira</a></li>
          <li>{icon} <a href="#portfolio" >Espace Bien-être</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Mes derniers articles</h4>
        <ul>
          <li>{icon} <a href="#blog" >Créer son site HTML/CSS</a></li>
          <li>{icon} <a href="#blog" >Vendre ses produits sur le web</a></li>
          <li>{icon} <a href="#blog" >Se positionner sur Google</a></li>
        </ul>
      </div>
      <h1 className="votre-classe">@Designated by JOHN DOE</h1>

    </footer>   
  );
}

export default Footer;
