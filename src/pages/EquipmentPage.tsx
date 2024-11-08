import React, { useState } from 'react';

interface Equipment {
  id: number;
  name: string;
  category: string;
  dailyRate: number;
  image: string;
  availability: boolean;
  description: string;
}

const EquipmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample equipment data - replace with your actual data
  const equipmentList: Equipment[] = [
    {
      id: 1,
      name: "Excavator CAT 320",
      category: "Excavators",
      dailyRate: 299.99,
      image: "/images/excavator.jpg",
      availability: true,
      description: "20-ton hydraulic excavator, perfect for large construction projects"
    },
    {
      id: 2,
      name: "Bobcat Skid Steer",
      category: "Loaders",
      dailyRate: 199.99,
      image: "/images/skid-steer.jpg",
      availability: true,
      description: "Compact loader suitable for various construction tasks"
    },
    // Add more equipment items as needed
  ];

  const categories = ['all', 'Excavators', 'Loaders', 'Cranes', 'Trucks', 'Tools'];

  const filteredEquipment = equipmentList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
          Equipment Rental
        </h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          Browse our wide selection of construction equipment available for rent
        </p>
      </div>

      {/* Search and Filter Section */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '300px'
          }}
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            backgroundColor: 'white'
          }}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Equipment Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
      }}>
        {filteredEquipment.map(equipment => (
          <div
            key={equipment.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={equipment.image}
              alt={equipment.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>{equipment.name}</h3>
              <p style={{ color: '#666', marginBottom: '10px' }}>
                {equipment.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '15px'
              }}>
                <span style={{ fontWeight: 'bold', color: '#1a237e' }}>
                  ${equipment.dailyRate}/day
                </span>
                <span style={{
                  padding: '5px 10px',
                  borderRadius: '15px',
                  backgroundColor: equipment.availability ? '#e8f5e9' : '#ffebee',
                  color: equipment.availability ? '#2e7d32' : '#c62828',
                  fontSize: '14px'
                }}>
                  {equipment.availability ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#1a237e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginTop: '15px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onClick={() => {/* Add rental logic */}}
              >
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentPage; 