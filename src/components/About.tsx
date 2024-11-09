import React from 'react';
import './About.css';
import Programs from './Programs';
import Trainers from './Trainers';
import Testimonials from './Testimonials';
import Contact from './Contact';
const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>We strive to provide the best equipment rental solutions, ensuring our clients have access to top-quality machinery and exceptional service for their projects.</p>
        </section>
        
        <section className="history">
          <h2>Our History</h2>
          <p>Founded in 2010, we've been serving the industry with dedication and excellence, growing from a small local provider to a trusted name in equipment rental solutions.</p>
        </section>
        
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Quality Service</li>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Reliability</li>
          </ul>
        </section>
      </div>
      <Programs />
      <Trainers />
      <Testimonials />
      <Contact />
      
    </div>
  );
};

export default About; 