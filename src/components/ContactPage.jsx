import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-page-container">
            <section className="contact-header">
                
              
            
            </section>
            <section className="contact-content">
                <div className="contact-form">
                    
                    <h3>Formulaire de contact :</h3>
                    <hr className="underline" />
                    <form>
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" />

                        <label htmlFor="">numero de telephone :</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="name">Sujet :</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" rows="5"></textarea>

                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Mes Coordonnées :</h3>
                    <hr className="underline" />
                    <p>Téléphone : 0620304050</p>
                    <p>Adresse : 40 Rue Laure Diebold, 69009 Lyon, France</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.7560426426514!2d4.797899231039906!3d45.77862232328926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1707206075355!5m2!1sen!2sfr" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
