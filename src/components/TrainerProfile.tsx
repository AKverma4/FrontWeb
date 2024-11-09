import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TrainerProfile.css';

// Define trainer data interface
interface TrainerData {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  certifications: string[];
  experience: string;
  contact: {
    email: string;
    phone: string;
  };
}

const trainersData: { [key: string]: TrainerData } = {
  'john-doe': {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Equipment Specialist',
    image: '/src/assets/1.jfif',
    bio: 'John is a seasoned equipment specialist with over 10 years of experience in heavy machinery operations and training.',
    expertise: [
      'Heavy Equipment Operation',
      'Safety Protocols',
      'Maintenance Training',
      'Equipment Inspection'
    ],
    certifications: [
      'Certified Equipment Trainer',
      'OSHA Safety Certification',
      'Heavy Machinery Operation License'
    ],
    experience: '10+ years in equipment training and operations',
    contact: {
      email: 'john.doe@digimart.com',
      phone: '+1 (555) 123-4567'
    }
  },
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Safety Expert',
    image: '/src/assets/2.jfif',
    bio: 'Sarah specializes in workplace safety protocols and has trained numerous teams in safe equipment operation.',
    expertise: [
      'Safety Regulations',
      'Risk Assessment',
      'Emergency Protocols',
      'Team Training'
    ],
    certifications: [
      'Safety Management Certification',
      'First Aid Instructor',
      'Industrial Safety Specialist'
    ],
    experience: '8+ years in safety training and consultation',
    contact: {
      email: 'sarah.johnson@digimart.com',
      phone: '+1 (555) 234-5678'
    }
  },
  'mike-wilson': {
    id: 'mike-wilson',
    name: 'Mike Wilson',
    role: 'Heavy Machinery Instructor',
    image: '/src/assets/3.jfif',
    bio: 'Mike is an expert in heavy machinery operations with extensive experience in construction and industrial equipment.',
    expertise: [
      'Crane Operations',
      'Excavator Training',
      'Load Management',
      'Equipment Maintenance'
    ],
    certifications: [
      'Master Heavy Equipment Operator',
      'Technical Training Certification',
      'Equipment Safety Specialist'
    ],
    experience: '12+ years in heavy machinery operations',
    contact: {
      email: 'mike.wilson@digimart.com',
      phone: '+1 (555) 345-6789'
    }
  },
  'emily-brown': {
    id: 'emily-brown',
    name: 'Emily Brown',
    role: 'Technical Specialist',
    image: '/src/assets/Ajaypic.png',
    bio: 'Emily specializes in technical training and equipment diagnostics, helping teams master complex machinery.',
    expertise: [
      'Technical Training',
      'Equipment Diagnostics',
      'Preventive Maintenance',
      'Operation Optimization'
    ],
    certifications: [
      'Technical Training Specialist',
      'Equipment Diagnostics Certification',
      'Maintenance Management'
    ],
    experience: '7+ years in technical training and support',
    contact: {
      email: 'emily.brown@digimart.com',
      phone: '+1 (555) 456-7890'
    }
  }
};

const TrainerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trainer = trainersData[id || ''];

  if (!trainer) {
    return (
      <div className="trainer-profile-error">
        <h2>Trainer not found</h2>
        <Link to="/trainers" className="back-button">Back to Trainers</Link>
      </div>
    );
  }

  return (
    <div className="trainer-profile-container">
      <div className="trainer-profile-header">
        <img src={trainer.image} alt={trainer.name} className="trainer-profile-image" />
        <div className="trainer-profile-info">
          <h1>{trainer.name}</h1>
          <h2>{trainer.role}</h2>
          <p>{trainer.experience}</p>
        </div>
      </div>

      <div className="trainer-profile-content">
        <section className="trainer-bio">
          <h3>About</h3>
          <p>{trainer.bio}</p>
        </section>

        <section className="trainer-expertise">
          <h3>Areas of Expertise</h3>
          <ul>
            {trainer.expertise.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="trainer-certifications">
          <h3>Certifications</h3>
          <ul>
            {trainer.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="trainer-contact">
          <h3>Contact Information</h3>
          <p>Email: {trainer.contact.email}</p>
          <p>Phone: {trainer.contact.phone}</p>
        </section>
      </div>

      <div className="trainer-profile-actions">
        <Link to="/trainers" className="back-button">Back to Trainers</Link>
        <button className="contact-button">Schedule Training</button>
      </div>
    </div>
  );
};

export default TrainerProfile; 