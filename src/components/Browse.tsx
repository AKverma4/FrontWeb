import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Browse: React.FC = () => {
  const categories = [
    {
      title: "Popular Categories",
      items: ["Excavators", "Loaders", "Cranes", "Aerial Platforms"]
    },
    {
      title: "Equipment by Type",
      items: ["Heavy Equipment", "Light Equipment", "Specialized Tools", "Safety Equipment"]
    },
    {
      title: "By Project",
      items: ["Construction", "Landscaping", "Industrial", "Residential"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Browse Equipment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect equipment for your project from our extensive collection
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/categories/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-900 flex items-center group"
                    >
                      <span className="mr-2">•</span>
                      {item}
                      <svg
                        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform 
                          group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/categories" 
            className="inline-flex items-center px-8 py-4 bg-blue-900 text-white 
              rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All Categories
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
          
          <Link 
            to="/get-quote" 
            className="inline-flex items-center px-8 py-4 border-2 border-blue-900 
              text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white 
              transition-colors duration-300"
          >
            Request Quote
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browse;