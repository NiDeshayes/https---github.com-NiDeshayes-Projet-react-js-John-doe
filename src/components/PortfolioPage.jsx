import React from 'react';
import './PortfolioPage.css'; 
import colorfulFruitsAndVegetables from '../images/réalisation1.jpg';
import realisation2 from '../images/réalisation2.jpg';
import realisation3 from '../images/réalisation3.jpg';

function PortfolioPage() {
  return (
    <div className="PortfolioPage" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>Voici quelques-unes de nos réalisations.</p>
      <section>
        <div className="container">
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div><img src={colorfulFruitsAndVegetables} alt="Réalisations 1" /></div>
              <h3>Fresh Food</h3>
              <h4>Réalisation d'un site avec commandes en ligne</h4>
              <button>Voir</button>
              <p>Site réalisé avec PHP et MySQL</p>
            </div>
            <div className="portfolio-item">
              <div><img src={realisation2} alt="Réalisations 2" /></div>
              <h3>Restaurant AKIRA</h3>
              <h4>Réalisation d'un site vitrine</h4>
              <button>Voir</button>
              <p>Site réalisé avec Wordpress</p>
            </div>
            <div className="portfolio-item">
              <div><img src={realisation3} alt="Réalisations 3" /></div>
              <h3>Espace bien-être</h3>
              <h4>Réalisation d'un site vitrine pour un praticien de bien-être</h4>
              <button>Voir</button>
              <p>Site réalisé en HTML/CSS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
