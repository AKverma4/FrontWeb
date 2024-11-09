import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '1340px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '800',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>DiGiMart</h3>
            <p style={{ 
              lineHeight: '1.8',
              color: '#94a3b8',
              marginBottom: '24px',
              maxWidth: '300px'
            }}>
              Your trusted partner in digital solutions. Bringing innovation and excellence to every project since 2010.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
            }}>
              {[
                { Icon: FaFacebookF, url: 'https://www.facebook.com/ajayverma.666/' },
                { Icon: FaTwitter, url: '#' },
                { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/ak-verma2002/' },
                { Icon: FaInstagram, url: 'https://www.instagram.com/ajayk_002/' }
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#3b82f6';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(148, 163, 184, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About Us', 'Services', 'Products', 'Contact Us', 'Careers'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link to="#" style={linkStyle}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={headingStyle}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Equipment Rental',
                'Construction Tools',
                'Event Equipment',
                'Power Tools',
                'Heavy Machinery',
                'Delivery & Pickup',
                'Maintenance Services',
                'Insurance Coverage'
              ].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link 
                    to="#" 
                    style={linkStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#3b82f6';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={headingStyle}>Contact Us</h4>
            <div style={{ 
              marginBottom: '20px', 
              color: '#94a3b8',
              lineHeight: '1.8'
            }}>
              <p style={{ 
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <span style={{ flexShrink: 0 }}>Address:</span>
                <span>B-503, Balaji Complex,<br/>
                Sector 8E, Plot no. 12/13,<br/>
                Kalamboli, Navi Mumbai - 410218</span>
              </p>
              <p style={{ 
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>Email:</span>
                <a 
                  href="mailto:ajaybuwaniwal4@gmail.com" 
                  style={{
                    ...linkStyle,
                    color: '#60a5fa'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#93c5fd';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#60a5fa';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  ajaybuwaniwal4@gmail.com
                </a>
              </p>
              <p style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>Phone:</span>
                <a 
                  href="tel:+917738609711" 
                  style={{
                    ...linkStyle,
                    color: '#60a5fa'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#93c5fd';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#60a5fa';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  +91 7738609711
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          color: '#94a3b8',
          textAlign: 'center',
        }}
        className="footer-bottom"
>
          <p>© 2024 DiGiMart. All rights reserved.</p>
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <Link to="#" style={bottomLinkStyle}>Privacy Policy</Link>
            <Link to="#" style={bottomLinkStyle}>Terms of Service</Link>
            <Link to="#" style={bottomLinkStyle}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const headingStyle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '24px',
  color: '#e2e8f0',
};

const linkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  ':hover': {
    color: '#3b82f6',
  },
};

const bottomLinkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  fontSize: '14px',
};

export default Footer; 