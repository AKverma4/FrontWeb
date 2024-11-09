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
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa' 
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '36px', 
          marginBottom: '20px',
          fontWeight: '600',
          color: '#1a237e' 
        }}>
          Professional Equipment Rental
        </h1>
        <p style={{ 
          color: '#505050', 
          fontSize: '18px',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Browse our extensive collection of premium construction equipment available for rent
        </p>
      </div>

      {/* Search and Filter Section */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #e0e0e0',
            width: '300px',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#1a237e';
            e.target.style.boxShadow = '0 2px 12px rgba(26,35,126,0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
          }}
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '12px 25px',
            borderRadius: '25px',
            border: '2px solid #e0e0e0',
            backgroundColor: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            outline: 'none',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231a237e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
            paddingRight: '40px'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#1a237e';
            e.target.style.boxShadow = '0 2px 12px rgba(26,35,126,0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
      }}>
        {filteredEquipment.map(equipment => (
          <div
            key={equipment.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <img
              src={equipment.image}
              alt={equipment.name}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '25px' }}>
              <h3 style={{ 
                marginBottom: '12px',
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a237e'
              }}>{equipment.name}</h3>
              <p style={{ 
                color: '#666', 
                marginBottom: '15px',
                lineHeight: '1.5'
              }}>
                {equipment.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px'
              }}>
                <span style={{ 
                  fontWeight: '600', 
                  color: '#1a237e',
                  fontSize: '18px'
                }}>
                  ${equipment.dailyRate}/day
                </span>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  backgroundColor: equipment.availability ? '#e8f5e9' : '#ffebee',
                  color: equipment.availability ? '#2e7d32' : '#c62828',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {equipment.availability ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#1a237e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  marginTop: '20px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#283593'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a237e'}
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