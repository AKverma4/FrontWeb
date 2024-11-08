import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

const Browse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Browse Equipment
        </h1>
        
        {/* Include the Categories component */}
        <Categories />
        
        <div className="text-center mt-8">
          <Link 
            to="/categories" 
            className="inline-block px-8 py-4 bg-blue-900 text-white 
              rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browse;