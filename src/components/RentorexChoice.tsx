import React from 'react';
import { motion } from 'framer-motion';

const RentorexChoice: React.FC = () => {
  const reasons = [
    {
      icon: "🛡️",
      title: "Quality Guaranteed",
      description: "All our equipment undergoes rigorous maintenance and safety checks before every rental."
    },
    {
      icon: "⚡",
      title: "24/7 Support", 
      description: "Round-the-clock technical support and emergency assistance for uninterrupted operations."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Transparent pricing with flexible rental periods and no hidden charges."
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description: "Quick and reliable delivery service across India with real-time tracking."
    },
    {
      icon: "🔧",
      title: "Expert Maintenance",
      description: "Regular maintenance by certified technicians to ensure peak performance."
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description: "Simple online booking process with instant confirmation and documentation."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Digimart
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience excellence in construction equipment rental with our comprehensive solutions and unmatched service quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{reason.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
            <span className="px-4 py-2 text-sm text-gray-600">
              Trusted by over 1000+ construction companies across India
            </span>
            <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium">
              Join them today
            </span>
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "Happy Clients" },
            { number: "5000+", label: "Equipment Rented" },
            { number: "24/7", label: "Customer Support" },
            { number: "98%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 
            transition-colors duration-300 inline-flex items-center">
            Get Started Now
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
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RentorexChoice; 