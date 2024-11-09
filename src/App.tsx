import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EfficiencySection from './components/EfficiencySection';
import Categories from './components/Categories';
import BudgetSection from './components/BudgetSection';
import RentorexChoice from './components/RentorexChoice';
import InsightsSection from './components/InsightsSection';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import EquipmentPage from './pages/EquipmentPage';
import CategoryPage from './pages/CategoryPage';
import Browse from './pages/Browse';
import CategoryDetail from './pages/CategoryDetail';
import { AuthProvider } from './context/AuthContext';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import TrainerProfile from './components/TrainerProfile';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <EfficiencySection />
                <Categories />
                <BudgetSection />
                <RentorexChoice />
                <InsightsSection />
                <QuoteForm />
              </>
            } />
            <Route path="/browse" element={<Browse />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/categories/:categoryName" element={<CategoryDetail />} />
            <Route path="/get-quote" element={<QuoteForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trainer/:id" element={<TrainerProfile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;