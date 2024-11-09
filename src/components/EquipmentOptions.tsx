import React from 'react';
import { motion } from 'framer-motion';

const EquipmentOptions: React.FC = () => {
  const equipment = [
    {
      category: 'Cardio Equipment',
      items: ['Treadmill', 'Exercise Bike', 'Elliptical', 'Rowing Machine', 'Stair Climber']
    },
    {
      category: 'Strength Training',
      items: ['Dumbbells', 'Barbells', 'Weight Plates', 'Squat Rack', 'Bench Press']
    },
    {
      category: 'Functional Training',
      items: ['Resistance Bands', 'Kettlebells', 'Medicine Balls', 'Foam Rollers', 'Yoga Mats']
    },
    {
      category: 'Cable Machines',
      items: ['Cable Crossover', 'Lat Pulldown', 'Low Row Machine', 'Tricep Pushdown', 'Cable Fly']
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentOptions; 