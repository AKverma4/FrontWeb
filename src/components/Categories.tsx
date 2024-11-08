import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryItem {
  id: number;
  name: string;
  icon: string;
  count: number;
  description: string;
  backgroundImage: string;
  subcategories: string[];
}

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const categories: CategoryItem[] = [
    {
      id: 1,
      name: "Excavators",
      icon: "/icons/excavator.svg",
      count: 15,
      description: "Wide range of excavators for all project sizes",
      backgroundImage: "/images/excavators-category.jpg",
      subcategories: ["Mini Excavators", "Crawler Excavators", "Wheeled Excavators"]
    },
    {
      id: 2,
      name: "Loaders",
      icon: "/icons/loader.svg",
      count: 12,
      description: "Front loaders, skid steers, and more",
      backgroundImage: "/images/loaders-category.jpg",
      subcategories: ["Wheel Loaders", "Skid Steer Loaders", "Backhoe Loaders"]
    },
    {
      id: 3,
      name: "Cranes",
      icon: "/icons/crane.svg",
      count: 8,
      description: "Mobile and tower cranes for heavy lifting",
      backgroundImage: "/images/cranes-category.jpg",
      subcategories: ["Tower Cranes", "Mobile Cranes", "Crawler Cranes"]
    },
    {
      id: 4,
      name: "Aerial Platforms",
      icon: "/icons/aerial.svg",
      count: 20,
      description: "Elevating work platforms and lifts",
      backgroundImage: "/images/aerial-category.jpg",
      subcategories: ["Scissor Lifts", "Boom Lifts", "Personnel Lifts"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Equipment Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive range of construction and industrial equipment, 
            carefully categorized to help you find exactly what you need.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/categories/${category.name.toLowerCase()}`)}
            >
              <div className="relative h-48">
                <img
                  src={category.backgroundImage}
                  alt={category.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 w-full p-6">
                <div className="flex items-center mb-4">
                  <img src={category.icon} alt="" className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                <p className="text-gray-200 text-sm mb-4 overflow-hidden" style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical'
                }}>
                  {category.description}
                </p>

                <div className="space-y-2">
                  {category.subcategories.map((sub, index) => (
                    <span key={index} className="inline-block mr-2 text-xs text-gray-300">
                      • {sub}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-white bg-black/30 px-3 py-1 rounded-full text-sm">
                    {category.count} items available
                  </span>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    hover:bg-blue-50 transform group-hover:-translate-y-1">
                    Explore Category →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/categories')}
            className="inline-flex items-center px-8 py-4 border-2 border-blue-900 
              text-lg font-semibold rounded-full text-blue-900 hover:text-white 
              hover:bg-blue-900 transition-all duration-300 group"
          >
            View All Categories
            <svg 
              className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;