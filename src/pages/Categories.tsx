import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Categories: React.FC = () => {
  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: '36px',
        marginBottom: '30px',
        color: '#1a237e',
      }}>
        Equipment Categories
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
      }}>
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/category/${category.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '20px',
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <h3 style={{
                color: 'white',
                fontSize: '24px',
                marginBottom: '10px',
              }}>
                {category.name}
              </h3>
              <div style={{
                color: 'white',
                fontSize: '14px',
              }}>
                {category.items} items available
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '10px 0 0 0',
                color: '#ffffff80',
              }}>
                {category.subcategories.map((sub) => (
                  <li key={sub}>{sub}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories; 