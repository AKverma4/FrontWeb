import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional Plan');

  const plans = [
    {
      title: "Basic Plan",
      price: "₹15,000",
      period: "per day",
      description: "Perfect for small projects",
      features: [
        "Access to basic equipment",
        "Standard support",
        // ... other features
      ],
      recommended: false
    },
    // ... other plans
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <motion.div
          key={plan.title}
          onClick={() => setSelectedPlan(plan.title)}
          className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer
            ${selectedPlan === plan.title 
              ? 'border-2 border-blue-500 shadow-lg' 
              : 'border border-gray-200'
            }
            ${plan.recommended ? 'border-blue-500' : ''}
          `}
        >
          {/* Your existing card content */}
          <h3>{plan.title}</h3>
          <p>{plan.description}</p>
          {/* ... rest of your card content ... */}
        </motion.div>
      ))}
    </div>
  );
};

export default PricingSection; 