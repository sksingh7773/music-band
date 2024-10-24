import React from 'react';
import './BandItem.css'; // Correct import for the CSS file

const BandItem = ({ band }) => {
  return (
    <div className="band-item">
      <div className="band-info">
        <h3 className="band-name">{band.name}</h3>
        <p className="band-detail">
          <strong>Formed in:</strong> {band['life-span']?.begin || 'Unknown'}
        </p>
        <p className="band-detail">
          <strong>Origin:</strong> {band.area?.name || 'Unknown'}
        </p>
      </div>
    </div>
  );
};

export default BandItem;
