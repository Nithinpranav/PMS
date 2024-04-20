// Treatment.js
import React, { useState, useEffect } from 'react';
import './Treatment.css';

const Treatment = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Here, you can fetch treatment data from an API or local storage
    const mockTreatments = [
      { id: 1, name: 'Medication A', description: 'Description for Medication A' },
      { id: 2, name: 'Therapy B', description: 'Description for Therapy B' },
    ];
    setTreatments(mockTreatments);
  }, []);

  return (
    <div className="treatment">
      <h2>Treatment Information</h2>
      <ul>
        {treatments.map((treatment) => (
          <li key={treatment.id}>
            <h3>{treatment.name}</h3>
            <p>{treatment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Treatment;