// components/SearchForm.js
import React from 'react';
import './SearchBarStyles.css';

const SearchForm = ({ cityName, updateCityName, executeSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={cityName}
        placeholder="Type a city name"
        onChange={(e) => updateCityName(e.target.value)}
        className="input-field"
      />
      <button onClick={() => executeSearch(cityName)} className="submit-button">
        Find Bands
      </button>
    </div>
  );
};

export default SearchForm;
