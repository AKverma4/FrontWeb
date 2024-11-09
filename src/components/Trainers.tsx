import React from 'react';
import './Trainers.css';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/1.jfif';
import trainer2 from '../assets/2.jfif';
import trainer3 from '../assets/3.jfif';
import trainer4 from '../assets/Ajaypic.png';

const Trainers: React.FC = () => {
    return (
        <div className="trainers-container">
            <h1>Our Expert Trainers</h1>
            <div className="trainers-grid">
                <div className="trainer-card">
                    <img src={trainer1} alt="John Doe" />
                    <h3>John Doe</h3>
                    <p>Equipment Specialist</p>
                    <Link to={`/trainer/${'John Doe'.toLowerCase().replace(' ', '-')}`}
                        className="trainer-button">
                        View Profile
                    </Link>
                </div>

                <div className="trainer-card">
                    <img src={trainer2} alt="Sarah Johnson" />
                    <h3>Sarah Johnson</h3>
                    <p>Safety Expert</p>
                    <Link to={`/trainer/${'Sarah Johnson'.toLowerCase().replace(' ', '-')}`}
                        className="trainer-button">
                        View Profile
                    </Link>
                </div>

                <div className="trainer-card">
                    <img src={trainer3} alt="Mike Wilson" />
                    <h3>Mike Wilson</h3>
                    <p>Heavy Machinery Instructor</p>
                    <Link to={`/trainer/${'Mike Wilson'.toLowerCase().replace(' ', '-')}`}
                        className="trainer-button">
                        View Profile
                    </Link>
                </div>

                <div className="trainer-card">
                    <img src={trainer4} alt="Emily Brown" />
                    <h3>Emily Brown</h3>
                    <p>Technical Specialist</p>
                    <Link to={`/trainer/${'Emily Brown'.toLowerCase().replace(' ', '-')}`}
                        className="trainer-button">
                        View Profile
                    </Link>
                </div>
            </div>
            <div className="trainers-cta">
                <Link to="/all-trainers" className="view-all-button">
                    View All Trainers
                </Link>
            </div>
        </div>
    );
};

export default Trainers; 