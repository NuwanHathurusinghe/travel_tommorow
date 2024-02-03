// SearchBar.js
import React, { useState } from 'react';
import './searchbar.css'; 
import searchIcon from '../../statics/icons8-search.svg'

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div id='search_bar'>
    <input
      type="text"
      className="search-input"  // Apply the CSS class
      placeholder="Search..."
      value={query}
      onChange={handleInputChange}
    />
    <img src={searchIcon} alt="Search-Icon" id='search-icon'/>
    </div>
  );
};

export default SearchBar;
