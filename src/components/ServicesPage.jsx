import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileExport, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './ServicePage.css';

function ServiceSection({ title, description, icon }) {
  return (
    <div className="service-section">
      <div className="service-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="service-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="blue-underline">MON OFFRE DE SERVICES</h1>
      <p className="description">Voici les préstations sur lesquelles je peux intervenir</p>
      
      <div className="service-container">
        <ServiceSection
          title="UX Design"
          description="L'UX design est une méthode de conception centrée sur l'utilisateur, son but est d'offrir une experience de navigation optimale à l'internaute."
          icon={faDesktop}
        />
        <ServiceSection
          title="Développement Web"
          description="Description du développement web."
          icon={faFileExport}
        />
        <ServiceSection
          title="Référencement"
          description="Description du référencement."
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
}

export default ServicesPage;
