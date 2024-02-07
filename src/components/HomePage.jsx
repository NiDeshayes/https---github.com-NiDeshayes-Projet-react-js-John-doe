import React from 'react';
import './HomePage.css';
import backgroundImg from '../images/background.jpg';
import johnDoeImg from '../images/john-doe.jpg';
import eclairImage from '../images/Eclair.png'; 
import competences from '../images/competences-barre-exemple.jpg'; 

function HomePage() {
    return (
        <div className="home-page">

            <div className="top-section">
                <img src={backgroundImg} alt="Background" className="background-image" />
                <div className="content">
                    <h1>Bienvenue sur notre site</h1>
                    <h3>Découvrez ce que nous avons à offrir</h3>
                    <a href="#about" className="learn-more-button">En savoir plus</a>
                </div>
                <img src={eclairImage} alt="Eclair" className="eclair-image" />
            </div>

            <div className="bottom-section">
                <div className="about-section">
                    <h2>À propos</h2>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <b>d'integrateur-developpeur web</b> au CEF.
                     Au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du <b>développement web</b>. 
                     Basé à Lyon, je suis à la recherche d'une alternance dans une agence afin de consolider ma formation de <b>développeur web full stack</b>.
                     J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                    </p>
                </div>
                <div className="john-doe-section">
                    <img src={johnDoeImg} alt="John Doe" className="john-doe-image" />
                    <div className="skills">
                        <h3>Mes Compétences</h3>
                        <img src={competences} alt="John Doe" className="competences-image" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
