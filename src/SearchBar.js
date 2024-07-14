import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search for customers..."
        value={searchText}
        onChange={handleSearch}
      />
      <i className="fa fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
