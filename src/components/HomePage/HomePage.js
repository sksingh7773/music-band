import React, { useState, useEffect } from 'react';
import useLocation from "../../hooks/useLocation";
import useDebounce from "../../hooks/useDebounce";
import { fetchBandsByCity } from '../../api/musicBrainzApi';
import MusicBandList from '../MusicBandList/MusicBandList';
import './HomePage.css';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    if (debouncedCity) {
      handleSearch(debouncedCity);
    }
  }, [debouncedCity]);

  const handleSearch = async (searchCity) => {
    setErrorMessage('');
    if (!searchCity && !location?.city) {
      alert('Please enter a city to explore local bands.');
      return;
    }

    try {
      setLoading(true);
      const cityToSearch = searchCity || location?.city;
      const bandsData = await fetchBandsByCity(cityToSearch);
      setBands(bandsData);
    } catch (error) {
      console.error('Error fetching bands:', error);
      setErrorMessage('Unable to retrieve band data at this time. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="location-container">
      <div className="location-details">
        <input
          type="text"
          value={city}
          placeholder={location?.city || 'Enter your city name...'}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button onClick={() => handleSearch(city)} className="search-button">
          {loading ? 'Finding Bands...' : 'Find Bands'}
        </button>
      </div>

      <h2 className="location-title">Discover Local Bands</h2>
      <p className="location-subtitle">Search by your city or explore music from different places around the world.</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <MusicBandList bands={bands} />
    </div>
  );
};

export default HomePage;
