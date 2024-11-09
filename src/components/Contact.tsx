import React from 'react';
import './Contact.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="contact-subtitle">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email Us</h3>
            <p>ajaybuwaniwal4@gmail.com</p>
            <p>support@digimart.com</p>
          </div>

          <div className="info-card">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>+91 7738609711</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>

          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>B-503, Balaji Complex,</p>
            <p>Sector 8E, Plot no. 12/13,</p>
            <p>Kalamboli, Navi Mumbai - 410218</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <select>
              <option value="">Select Inquiry Type</option>
              <option value="digital">Digital Solutions</option>
              <option value="consulting">IT Consulting</option>
              <option value="software">Software Development</option>
              <option value="cloud">Cloud Services</option>
              <option value="data">Data Analytics</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows={6} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 