import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-container">
      <h1>What Our Clients Say</h1>
      <p className="testimonials-subtitle">Trusted by businesses across the industry</p>
      
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <p>Excellent service and top-quality equipment. The team was professional and efficient. Would highly recommend their services to anyone in need of reliable equipment.</p>
            <div className="testimonial-rating">★★★★★</div>
          </div>
          <div className="testimonial-author">
            <img src="/avatars/jane.jpg" alt="Profile" className="author-image" />
            <div className="author-info">
              <h4>Jane Smith</h4>
              <p>CEO, Construction Co.</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">❝</div>
          <div className="testimonial-content">
            <p>Outstanding support and reliable machinery. They exceeded our expectations in every way possible. The team's expertise made our project a success.</p>
            <div className="testimonial-rating">★★★★★</div>
          </div>
          <div className="testimonial-author">
            <img src="/avatars/john.jpg" alt="Profile" className="author-image" />
            <div className="author-info">
              <h4>John Davis</h4>
              <p>Project Manager, BuildRight Inc.</p>
            </div>
          </div>
        </div>

        {/* Add similar structure for other testimonials */}
      </div>
    </div>
  );
};

export default Testimonials; 