import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToolCardProps {
  image: string;
  title: string;
  description: string;
  details: {
    features: string[];
    specifications: string[];
    rentalRates: {
      daily: number;
      weekly: number;
      monthly: number;
    };
  };
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: ToolCardProps;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, tool }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-blue-900">{tool.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <img
            src={tool.image}
            alt={tool.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-600 mb-6">{tool.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Features</h4>
              <ul className="list-disc list-inside space-y-2">
                {tool.details.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Specifications</h4>
              <ul className="list-disc list-inside space-y-2">
                {tool.details.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-600">{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
            <h4 className="font-semibold text-lg mb-4">Rental Rates</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Daily</div>
                <div className="text-xl font-bold text-blue-900">₹{tool.details.rentalRates.daily}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Weekly</div>
                <div className="text-xl font-bold text-blue-900">₹{tool.details.rentalRates.weekly}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Monthly</div>
                <div className="text-xl font-bold text-blue-900">₹{tool.details.rentalRates.monthly}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ToolCard: React.FC<ToolCardProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
      >
        <img 
          src={props.image} 
          alt={props.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">{props.title}</h3>
          <p className="text-gray-600 mb-4 min-h-[48px]">{props.description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg 
              hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center"
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tool={props}
      />
    </>
  );
};

const EfficiencySection: React.FC = () => {
  const tools = [
    {
      image: "https://imgs.search.brave.com/hPyrk8l2CYbm1qmaeTMPN7zyXnZTyVq7Z4Byttk7p-E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVlaGxlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvTFYxNTBOLmpw/Zw",
      title: "Excavators",
      description: "High-performance excavators for efficient earthmoving operations",
      details: {
        features: [
          "Advanced hydraulic system",
          "GPS tracking enabled",
          "Climate-controlled cabin",
          "360-degree visibility",
          "Auto-idle function",
          "Boom float function"
        ],
        specifications: [
          "Operating Weight: 20,000 kg",
          "Dig Depth: 6.7m",
          "Engine Power: 122 kW",
          "Bucket Capacity: 0.9-1.3m³",
          "Fuel Tank: 400L",
          "Max Reach: 9.9m"
        ],
        rentalRates: {
          daily: 25000,
          weekly: 150000,
          monthly: 450000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/YUFqnKk6fxkaEgIqoOOOrVu7tSrlMv_1sy-ltyoH04Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS82NzMv/NjczMTgxLmpwZw",
      title: "Wheel Loaders",
      description: "Versatile wheel loaders for material handling and loading operations",
      details: {
        features: [
          "Quick attachment change system",
          "Load sensing hydraulics",
          "Rear view camera",
          "Auto-idle function",
          "Ride control system",
          "Limited slip differentials"
        ],
        specifications: [
          "Operating Weight: 18,000 kg",
          "Bucket Capacity: 3.1m³",
          "Engine Power: 195 kW",
          "Breakout Force: 162 kN",
          "Dump Height: 2.9m",
          "Turning Radius: 6.3m"
        ],
        rentalRates: {
          daily: 20000,
          weekly: 120000,
          monthly: 360000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc",
      title: "Mobile Cranes",
      description: "Powerful mobile cranes for heavy lifting and precise placement",
      details: {
        features: [
          "Telescopic boom system",
          "Load moment indicator",
          "Outrigger monitoring",
          "Wind speed monitor",
          "Anti-two block system",
          "Multiple steering modes"
        ],
        specifications: [
          "Max Lifting Capacity: 100T",
          "Main Boom Length: 60m",
          "Max Working Radius: 48m",
          "Counterweight: 32T",
          "Travel Speed: 80 km/h",
          "Ground Pressure: 12.5 kg/cm²"
        ],
        rentalRates: {
          daily: 35000,
          weekly: 210000,
          monthly: 630000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/OmyXa9QoSqX6KbUl3yEIJesrY4_PeWdLiDl-lnZTznM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy8yNzc0NTc0/Mi1uaWdodC12ZWhp/Y2xlLWV4Y2F2YXRv/ci1oZC13YWxscGFw/ZXIuanBn",
      title: "Bulldozers",
      description: "Robust bulldozers for earthmoving and ground leveling operations",
      details: {
        features: [
          "Hydrostatic drive system",
          "Grade control ready",
          "Enclosed ROPS cabin",
          "Dual path steering",
          "Auto blade assist",
          "Slope monitoring system"
        ],
        specifications: [
          "Operating Weight: 22,000 kg",
          "Blade Capacity: 4.3m³",
          "Engine Power: 168 kW",
          "Track Length: 3.2m",
          "Ground Pressure: 0.45 kg/cm²",
          "Fuel Capacity: 380L"
        ],
        rentalRates: {
          daily: 28000,
          weekly: 168000,
          monthly: 504000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/2q7RH7YBgHWUGGAsP4q8-cYGnc_CF9kZjvwzV0_8CYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/OTU4NDg5L3Bob3Rv/L2JhY2tob2UtbG9h/ZGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1GWnVfSHJj/RmxKbGVxbmVxRGhB/ZmxBbmVxbGJxbGhw/RnZxbGJxbGhwRnZx/bGJxbGhwRnc9",
      title: "Backhoe Loaders",
      description: "Versatile backhoe loaders for digging and material handling",
      details: {
        features: [
          "4-wheel drive system",
          "Extendable dipper",
          "Pattern changer",
          "Return to dig function",
          "Auto idle system",
          "Ride control system"
        ],
        specifications: [
          "Operating Weight: 8,500 kg",
          "Dig Depth: 4.5m",
          "Bucket Capacity: 1.0m³",
          "Engine Power: 74.5 kW",
          "Breakout Force: 62 kN",
          "Fuel Tank: 160L"
        ],
        rentalRates: {
          daily: 15000,
          weekly: 90000,
          monthly: 270000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/hPyrk8l2CYbm1qmaeTMPN7zyXnZTyVq7Z4Byttk7p-E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVlaGxlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvTFYxNTBOLmpw/Zw",
      title: "Skid Steer Loaders",
      description: "Compact and maneuverable skid steer loaders for various applications",
      details: {
        features: [
          "Vertical lift path",
          "High flow hydraulics",
          "Quick attach system",
          "Self-leveling bucket",
          "Two-speed drive",
          "Advanced display system"
        ],
        specifications: [
          "Operating Weight: 3,200 kg",
          "Rated Capacity: 900 kg",
          "Engine Power: 55 kW",
          "Hydraulic Flow: 90 L/min",
          "Travel Speed: 12 km/h",
          "Bucket Width: 1.8m"
        ],
        rentalRates: {
          daily: 12000,
          weekly: 72000,
          monthly: 216000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/YUFqnKk6fxkaEgIqoOOOrVu7tSrlMv_1sy-ltyoH04Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS82NzMv/NjczMTgxLmpwZw",
      title: "Compactors",
      description: "High-performance compactors for soil and asphalt compaction",
      details: {
        features: [
          "Dual amplitude vibration",
          "Automatic vibration control",
          "Edge cutter and compactor",
          "Water sprinkler system",
          "Drum offset capability",
          "ROPS/FOPS cabin"
        ],
        specifications: [
          "Operating Weight: 12,000 kg",
          "Drum Width: 2.1m",
          "Centrifugal Force: 280 kN",
          "Engine Power: 110 kW",
          "Frequency: 42 Hz",
          "Water Tank: 1000L"
        ],
        rentalRates: {
          daily: 18000,
          weekly: 108000,
          monthly: 324000
        }
      }
    },
    {
      image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc",
      title: "Concrete Equipment",
      description: "Complete range of concrete handling and finishing equipment",
      details: {
        features: [
          "Auto drum rotation",
          "High discharge system",
          "GPS tracking enabled",
          "Load sensing system",
          "Auto water control",
          "Remote monitoring"
        ],
        specifications: [
          "Drum Capacity: 6m³",
          "Mixing Speed: 14 rpm",
          "Water Tank: 400L",
          "Engine Power: 85 kW",
          "Max Grade: 30%",
          "Discharge Height: 1.2m"
        ],
        rentalRates: {
          daily: 10000,
          weekly: 60000,
          monthly: 180000
        }
      }
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Unlock Efficiency: Rent The Right Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access professional-grade equipment to maximize your project's efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection; 