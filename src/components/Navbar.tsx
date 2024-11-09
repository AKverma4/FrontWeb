import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes shine {
        0% { left: -100%; }
        100% { left: 200%; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @media (max-width: 768px) {
        .get-quote-button {
          width: 100% !important;
          text-align: center !important;
        }
        .menu-button {
          display: block !important;
        }
        .nav-links {
          display: ${isMenuOpen ? 'flex' : 'none'} !important;
          flex-direction: column !important;
          width: 100% !important;
          gap: 20px !important;
          align-items: center !important;
          padding: 20px 0 !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => styleSheet.remove();
  }, [isMenuOpen]);

  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      padding: '20px 20px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: '1340px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <div style={{ 
          fontSize: '32px', 
          fontWeight: '800', 
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          textShadow: '0px 2px 4px rgba(0,0,0,0.05)',
          color: '#1e40af',
        }}>
          <Link to="/" style={{ 
            textDecoration: 'none',
            display: 'block',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: '#1e40af',
          }}>
            DiGiMart
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '24px', height: '2px', background: '#1e40af', marginBottom: '5px' }}></div>
          <div style={{ width: '24px', height: '2px', background: '#1e40af', marginBottom: '5px' }}></div>
          <div style={{ width: '24px', height: '2px', background: '#1e40af' }}></div>
        </button>

        <div style={{
          display: isMenuOpen ? 'flex' : 'flex',
          gap: '48px',
        }} className="nav-links">
          {['Home', 'Equipment', 'Categories', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                ...linkStyle,
                position: 'relative',
                overflow: 'hidden',
                padding: '10px 20px',
                borderRadius: '8px',
              }}
              onClick={handleLinkClick}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#EEF2FF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.color = '#1e40af';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,64,175,0.08)';

                const shine = document.createElement('div');
                shine.style.cssText = `
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 50%;
                  height: 100%;
                  background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,0.6),
                    transparent
                  );
                  transform: skewX(-20deg);
                  animation: shine 0.8s ease-in-out;
                `;
                e.currentTarget.appendChild(shine);
                
                setTimeout(() => shine.remove(), 800);
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        <Link 
          to="/get-quote"
          className="get-quote-button"
          style={{
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.3px',
            boxShadow: '0 4px 16px rgba(30,64,175,0.15)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,64,175,0.25)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,64,175,0.15)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          Get Quote
        </Link>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2"
              style={{
                padding: '14px 32px',
                background: '#EEF2FF',
                color: '#1e40af',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '0.3px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#E0E7FF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#EEF2FF';
              }}
            >
              <span>Hi, {user.name}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {isProfileOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                style={{
                  animation: 'fadeIn 0.2s ease-out',
                }}
              >
                <div className="py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                      setIsProfileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            style={{
              padding: '14px 32px',
              background: '#EEF2FF',
              color: '#1e40af',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              fontWeight: '600',
              letterSpacing: '0.3px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#E0E7FF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = '#EEF2FF';
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: '#334155',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '0.2px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative' as const,
  padding: '10px 20px',
  border: '1px solid transparent',
  borderRadius: '8px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

export default Navbar; 