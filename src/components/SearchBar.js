import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container mb-4">
      <input
        type="text"
        id="searchBar"
        className="form-control"
        placeholder="Search for customers..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
