import React from 'react';
import BandItem from "../BandItem/BandItem";
import './MusicBandList.css';

const MusicBandList = ({ bands }) => {
  return (
    <div className="bands-list-container">
      <h3 className="bands-list-title">Local Bands Near You</h3>
      <div className="bands-list">
        {bands.length > 0 ? (
          bands.map((band) => (
            <BandItem key={band.id} band={band} />
          ))
        ) : (
          <p className="no-bands">No bands found for the selected location.</p>
        )}
      </div>
    </div>
  );
};

export default MusicBandList;
