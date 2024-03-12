// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ perfumes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Brand');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
    setSearchTerm(''); // Reset search term when filter changes
  };

  const filteredPerfumes = perfumes.filter((perfume) => {
    if (filterType === 'all') {
      return (
        perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perfume.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perfume.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perfume.price.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (filterType === 'brand') {
      return perfume.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterType === 'price') {
      return perfume.price.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterType === 'scent') {
      return perfume.type.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="search-container">
      <select name="filter" onChange={handleFilterChange} value={filterType}>
        <option value="all">All</option>
        <option value="brand">Brand</option>
        <option value="price">Price</option>
        <option value="scent">Scent</option>
      </select>
      <input
        type="text"
        name="search"
        placeholder={`Search by ${filterType}`}
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>

      {/* Display filtered perfumes */}
      <div className="perfume-container">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map((perfume) => (
            <div className="perfume-item" key={perfume.name}>
              <div className="perfume-details">
                <img src={perfume.image} alt={perfume.name} />
                <h3>{perfume.name}</h3>
                <p>{perfume.description}</p>
                <p>{perfume.type}</p>
                <p>{perfume.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No matching perfumes found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
