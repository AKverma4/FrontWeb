// import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import About from '../components/About';
import EquipmentOptions from '../components/EquipmentOptions';
// import Programs from '../components/Programs';
// import Trainers from '../components/Trainers';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main>
                <Hero />
                {/* <About /> */}
                <EquipmentOptions />
                {/* <Programs /> */}
                {/* <Trainers /> */}
                {/* <Testimonials /> */}
                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default Home; 