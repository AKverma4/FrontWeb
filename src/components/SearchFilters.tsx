import React, { useState } from 'react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  availability: string;
  priceRange: string;
  specifications: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilter }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    availability: '',
    priceRange: '',
    specifications: [],
  });

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginBottom: '30px',
    }}>
      {/* Search Bar */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="search"
          placeholder="Search equipment..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <select
          value={filters.category}
          onChange={(e) => {
            const newFilters = { ...filters, category: e.target.value };
            setFilters(newFilters);
            onFilter(newFilters);
          }}
          style={{ padding: '8px', borderRadius: '4px' }}
        >
          <option value="">All Categories</option>
          <option value="excavators">Excavators</option>
          <option value="loaders">Loaders</option>
          <option value="cranes">Cranes</option>
          <option value="aerial-platforms">Aerial Platforms</option>
        </select>

        <select
          value={filters.availability}
          onChange={(e) => {
            const newFilters = { ...filters, availability: e.target.value };
            setFilters(newFilters);
            onFilter(newFilters);
          }}
          style={{ padding: '8px', borderRadius: '4px' }}
        >
          <option value="">Availability</option>
          <option value="available">Available Now</option>
          <option value="upcoming">Available Soon</option>
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => {
            const newFilters = { ...filters, priceRange: e.target.value };
            setFilters(newFilters);
            onFilter(newFilters);
          }}
          style={{ padding: '8px', borderRadius: '4px' }}
        >
          <option value="">Price Range</option>
          <option value="0-100">$0 - $100/day</option>
          <option value="101-500">$101 - $500/day</option>
          <option value="501+">$501+/day</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters; 