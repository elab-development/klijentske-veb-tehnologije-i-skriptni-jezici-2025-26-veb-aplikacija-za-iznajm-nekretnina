import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2>Kontaktirajte nas</h2>
        <form className="contact-form">
          <label>Ime</label>
          <input type="text" placeholder="Vaše ime" />
          
          <label>E-mail</label>
          <input type="email" placeholder="Vaš e-mail" />
          
          <label>Poruka</label>
          <textarea placeholder="Kako vam možemo pomoći?" rows={4}></textarea>
          
          <button type="submit" className="submit-button">Pošalji</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;