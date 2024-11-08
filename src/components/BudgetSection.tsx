import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

const BudgetSection: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic Plan",
      description: "Perfect for small projects",
      price: "₹15,000",
      duration: "per day",
      features: [
        "Access to basic equipment",
        "Standard support",
        "24/7 customer service",
        "Basic insurance coverage",
        "Delivery within 48 hours"
      ]
    },
    {
      name: "Professional Plan",
      description: "Ideal for medium-sized projects",
      price: "₹75,000",
      duration: "per week",
      recommended: true,
      features: [
        "Access to premium equipment",
        "Priority technical support",
        "24/7 on-site assistance",
        "Comprehensive insurance",
        "Same-day delivery",
        "Operator training included"
      ]
    },
    {
      name: "Enterprise Plan",
      description: "Best for large projects",
      price: "₹2,50,000",
      duration: "per month",
      features: [
        "Access to entire fleet",
        "Dedicated project manager",
        "24/7 premium support",
        "Full coverage insurance",
        "Immediate delivery",
        "Multiple operator training",
        "Flexible payment terms"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Budget-Friendly Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect rental plan that fits your project needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden 
                ${plan.recommended ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm">
                  Recommended
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.duration}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg 
                        className="w-5 h-5 text-green-500 mr-3" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300
                    ${plan.recommended 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-blue-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need a custom plan for your specific requirements?
          </p>
          <button className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600">
            Contact our sales team
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
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetSection; 