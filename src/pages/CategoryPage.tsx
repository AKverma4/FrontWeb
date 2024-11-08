import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  equipmentCount: number;
  subcategories: string[];
}

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  
  const categories: Category[] = [
    {
      id: 1,
      name: "Excavators",
      description: "Wide range of excavators for all project sizes",
      image: "https://imgs.search.brave.com/OmyXa9QoSqX6KbUl3yEIJesrY4_PeWdLiDl-lnZTznM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy8yNzc0NTc0/Mi1uaWdodC12ZWhp/Y2xlLWV4Y2F2YXRv/ci1oZC13YWxscGFw/ZXIuanBn",
      equipmentCount: 15,
      subcategories: ["Mini Excavators", "Crawler Excavators", "Wheeled Excavators"]
    },
    {
      id: 2,
      name: "Loaders",
      description: "Front loaders, skid steers, and more",
      image: "https://imgs.search.brave.com/YUFqnKk6fxkaEgIqoOOOrVu7tSrlMv_1sy-ltyoH04Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS82NzMv/NjczMTgxLmpwZw",
      equipmentCount: 12,
      subcategories: ["Wheel Loaders", "Skid Steer Loaders", "Backhoe Loaders"]
    },
    {
      id: 3,
      name: "Cranes",
      description: "Mobile and tower cranes for heavy lifting",
      image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc",
      equipmentCount: 8,
      subcategories: ["Tower Cranes", "Mobile Cranes", "Crawler Cranes"]
    },
    {
      id: 4,
      name: "Aerial Platforms",
      description: "Elevating work platforms and lifts",
      image: "https://imgs.search.brave.com/R-7MtOzWQB3RV6Fk11sbKT2UT0rAIYGmdd0CJm3SH1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/NzMwMTYxMC9waG90/by9hZXJpYWwtdmll/dy1vZi1sb25kb24t/YW5kLXRoZS10b3dl/ci1icmlkZ2Uud2Vi/cD9hPTEmYj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPWRmVDRX/YUxzVWJueVBib1A1/ODE5VTdLRlFkSlpj/NU1ZWDZYdGtucTlt/LWs9",
      equipmentCount: 20,
      subcategories: ["Scissor Lifts", "Boom Lifts", "Personnel Lifts"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Equipment Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our wide range of construction equipment categories, each offering 
            high-quality machinery for your specific project needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                  px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {category.equipmentCount} items
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>

                {/* Subcategories */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => navigate(`/categories/${category.name.toLowerCase()}`)}
                    className="bg-blue-900 text-white px-6 py-2.5 rounded-lg 
                      hover:bg-blue-800 transition-colors duration-300 flex items-center"
                  >
                    View Equipment
                    <svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button 
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    onClick={() => {/* Add to favorites or similar */}}
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;