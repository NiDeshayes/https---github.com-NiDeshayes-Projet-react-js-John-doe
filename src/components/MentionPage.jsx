import React, { useState } from 'react';
import './MentionPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';

function MentionPage() {
  
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [isHostVisible, setIsHostVisible] = useState(false);
  const [isCreditsVisible, setIsCreditsVisible] = useState(false);

  return (
    <div className="mention-page-container">
      <h1 className="mention-title">Mentions Légales</h1>
      <div className="mention-section">
        <h2 onClick={() => setIsEditorVisible(!isEditorVisible)}>
          Éditeur du site <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </h2>
        {isEditorVisible && (
          <div className="mention-content">
            <h2>John Doe</h2>
            <p>Adresse: 123 Rue du Code</p>
            <p>Téléphone: <a href="tel:0123456789" target="_blank" rel="noopener noreferrer">0123456789</a></p>
            <p>Email: <a href="mailto:johndoe@gmail.com" target="_blank" rel="noopener noreferrer">johndoe@gmail.com</a></p>
          </div>
        )}
      </div>
      <div className="mention-section">
        <h2 onClick={() => setIsHostVisible(!isHostVisible)}>
          Hébergeur <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </h2>
        {isHostVisible && (
          <div className="mention-content">
            <h2>Always Data</h2>
            <p>Rue du faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <p>Site: <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com <FontAwesomeIcon icon={faGlobe} /></a></p>
          </div>
        )}
      </div>
      <div className="mention-section">
        <h2 onClick={() => setIsCreditsVisible(!isCreditsVisible)}>
          Crédits <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </h2>
        {isCreditsVisible && (
          <div className="mention-content">
            <h2>Crédits</h2>
            <p>Site édité par John Doe, étudiant du CEF.</p>
            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MentionPage;
