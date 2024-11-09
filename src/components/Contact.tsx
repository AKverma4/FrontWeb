import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="contact-subtitle">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>info@digimart.com</p>
            <p>support@digimart.com</p>
          </div>

          <div className="info-card">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>

          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Business Street</p>
            <p>New York, NY 10001</p>
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
              <option value="rental">Equipment Rental</option>
              <option value="support">Technical Support</option>
              <option value="business">Business Inquiry</option>
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