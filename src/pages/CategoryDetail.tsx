import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Equipment {
  id: number;
  name: string;
  description: string;
  image: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number
  specifications: {
    [key: string]: string;
  };
  features: string[];
}

const CategoryDetail: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Mock data organized by category - replace with actual API call or data source
  const equipmentByCategory: { [key: string]: Equipment[] } = {
    excavators: [
      {
        id: 1,
        name: "CAT 320 Excavator",
        description: "Powerful and efficient excavator suitable for medium to large construction projects",
        image: "https://imgs.search.brave.com/OmyXa9QoSqX6KbUl3yEIJesrY4_PeWdLiDl-lnZTznM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy8yNzc0NTc0/Mi1uaWdodC12ZWhp/Y2xlLWV4Y2F2YXRv/ci1oZC13YWxscGFw/ZXIuanBn",
        dailyRate: 35000,
        weeklyRate: 210000,
        monthlyRate: 750000,
        specifications: {
          "Operating Weight": "20,000 kg",
          "Engine Power": "122 kW",
          "Max Dig Depth": "6.7 m",
          "Bucket Capacity": "0.9-1.3 m³"
        },
        features: [
          "GPS tracking system",
          "Air-conditioned cabin",
          "Rear-view camera",
          "Auto idle system"
        ]
      },
      {
        id: 2,
        name: "Komatsu PC210 Excavator",
        description: "Versatile excavator with advanced hydraulic system for precise control",
        image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc",
        dailyRate: 32000,
        weeklyRate: 192000,
        monthlyRate: 680000,
        specifications: {
          "Operating Weight": "21,000 kg",
          "Engine Power": "123 kW",
          "Max Dig Depth": "6.8 m",
          "Bucket Capacity": "0.8-1.2 m³"
        },
        features: [
          "KOMTRAX monitoring system",
          "Spacious operator cabin",
          "LED work lights",
          "Eco-gauge"
        ]
      }
    ],
    loaders: [
      {
        id: 3,
        name: "CAT 966 Wheel Loader",
        description: "High-performance wheel loader for efficient material handling",
        image: "https://imgs.search.brave.com/YUFqnKk6fxkaEgIqoOOOrVu7tSrlMv_1sy-ltyoH04Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLmFscGhhY29k/ZXJzLmNvbS82NzMv/NjczMTgxLmpwZw",
        dailyRate: 500,
        weeklyRate: 3000,
        monthlyRate: 10000,
        specifications: {
          "Operating Weight": "24,000 kg",
          "Engine Power": "230 kW",
          "Bucket Capacity": "4.2 m³",
          "Dump Height": "3.1 m"
        },
        features: [
          "Payload measurement system",
          "360-degree visibility",
          "Climate controlled cabin",
          "Advanced hydraulics"
        ]
      }
    ],
    cranes: [
      {
        id: 4,
        name: "Liebherr LTM 1100",
        description: "Mobile crane with exceptional maneuverability and lifting capacity",
        image: "https://imgs.search.brave.com/h_TPIDQ4gK1-_Ln5FlnO0h1x85YxC5zfHas7faTKdhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY3Lzk2LzA3/LzM2MF9GXzM2Nzk2/MDc3M185ZjZrcGJZ/R0hadnI3dGZWc01w/RDlrQzFFWVlVWW16/WS5qcGc",
        dailyRate: 800,
        weeklyRate: 4800,
        monthlyRate: 16000,
        specifications: {
          "Max Lifting Capacity": "100 tonnes",
          "Max Boom Length": "52 m",
          "Drive Configuration": "8x8x8",
          "Transport Weight": "48,000 kg"
        },
        features: [
          "Telescopic boom",
          "Load moment indicator",
          "Outrigger monitoring",
          "Wind speed monitor"
        ]
      }
    ],
    "aerial-platforms": [
      {
        id: 5,
        name: "JLG 1850SJ",
        description: "Ultra-boom lift with exceptional working height and reach",
        image: "https://imgs.search.brave.com/R-7MtOzWQB3RV6Fk11sbKT2UT0rAIYGmdd0CJm3SH1o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/NzMwMTYxMC9waG90/by9hZXJpYWwtdmll/dy1vZi1sb25kb24t/YW5kLXRoZS10b3dl/ci1icmlkZ2Uud2Vi/cD9hPTEmYj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPWRmVDRX/YUxzVWJueVBib1A1/ODE5VTdLRlFkSlpj/NU1ZWDZYdGtucTlt/LWs9",
        dailyRate: 600,
        weeklyRate: 3600,
        monthlyRate: 12000,
        specifications: {
          "Working Height": "58.6 m",
          "Platform Capacity": "450 kg",
          "Horizontal Outreach": "24.38 m",
          "Power Source": "Diesel"
        },
        features: [
          "Self-leveling platform",
          "Fall arrest anchors",
          "LCD control panel",
          "All-wheel drive"
        ]
      }
    ]
  };

  // Get equipment list for the current category
  const categoryEquipment = categoryName ? equipmentByCategory[categoryName.toLowerCase()] : [];

  if (!categoryEquipment) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Category Not Found
          </h1>
          <p className="text-gray-600">
            Sorry, we couldn't find any equipment in this category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 capitalize">
          {categoryName?.replace('-', ' ')}
        </h1>
        
        <div className="grid gap-8">
          {categoryEquipment.map((equipment) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 md:h-64 w-full md:w-96 object-cover"
                    src={equipment.image}
                    alt={equipment.name}
                  />
                </div>
                <div className="p-4 md:p-8 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-0">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {equipment.name}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {equipment.description}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="text-xl md:text-2xl font-bold text-blue-900">
                        ₹{equipment.dailyRate.toLocaleString('en-IN')}/day
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                      <div className="space-y-2">
                        {Object.entries(equipment.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {equipment.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
                      <div className="grid grid-cols-3 gap-2 md:gap-4 text-center w-full md:w-auto">
                        <div>
                          <div className="text-sm text-gray-500">Daily Rate</div>
                          <div className="font-semibold">₹{equipment.dailyRate.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Weekly Rate</div>
                          <div className="font-semibold">₹{equipment.weeklyRate.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Monthly Rate</div>
                          <div className="font-semibold">₹{equipment.monthlyRate.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                      <button className="w-full md:w-auto bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 
                        transition-colors duration-300">
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail; 