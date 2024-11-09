import React from 'react';
import { Link } from 'react-router-dom';

interface ProgramCard {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const programsData: ProgramCard[] = [
  {
    title: "Short-Term Equipment Rental",
    description: "Perfect for project-based needs and temporary requirements. Rent top-quality equipment for 1 day to 3 months.",
    icon: "🚜",
    benefits: [
      "Flexible rental periods",
      "24/7 technical support",
      "Delivery and pickup service",
      "Maintenance included"
    ]
  },
  {
    title: "Long-Term Leasing",
    description: "Cost-effective solutions for extended projects. Lease equipment for 3 months to 2 years with premium benefits.",
    icon: "🏗️",
    benefits: [
      "Reduced monthly rates",
      "Priority maintenance",
      "Equipment upgrade options",
      "Dedicated account manager"
    ]
  },
  {
    title: "Operator Training",
    description: "Comprehensive training programs for your team to operate equipment safely and efficiently.",
    icon: "👨‍🏫",
    benefits: [
      "Certified instructors",
      "Hands-on experience",
      "Safety certification",
      "Custom training plans"
    ]
  },
  {
    title: "Equipment Maintenance",
    description: "Regular maintenance and emergency repair services to keep your equipment running smoothly.",
    icon: "🔧",
    benefits: [
      "Scheduled maintenance",
      "Emergency repairs",
      "Parts replacement",
      "Performance monitoring"
    ]
  },
  {
    title: "Fleet Management",
    description: "Complete fleet management solutions for businesses with multiple equipment needs.",
    icon: "📊",
    benefits: [
      "Equipment tracking",
      "Usage optimization",
      "Cost analysis",
      "Maintenance scheduling"
    ]
  },
  {
    title: "Consulting Services",
    description: "Expert advice on equipment selection and optimization for your specific project needs.",
    icon: "💡",
    benefits: [
      "Project analysis",
      "Equipment recommendations",
      "Cost optimization",
      "Efficiency planning"
    ]
  }
];

const Programs: React.FC = () => {
  return (
    <div className="programs-container" style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#1a237e'
      }}>Our Programs</h1>
      
      <div className="programs-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {programsData.map((program, index) => (
          <div key={index} className="program-card" style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '25px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>
              {program.icon}
            </div>
            <h3 style={{
              color: '#1a237e',
              marginBottom: '15px',
              fontSize: '20px'
            }}>{program.title}</h3>
            <p style={{
              color: '#666',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>{program.description}</p>
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '15px'
            }}>
              <h4 style={{
                color: '#1a237e',
                marginBottom: '10px',
                fontSize: '16px'
              }}>Key Benefits:</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0
              }}>
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} style={{
                    marginBottom: '8px',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ color: '#1a237e' }}>✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to={`/program/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#1a237e',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#283593';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#1a237e';
              }}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs; 