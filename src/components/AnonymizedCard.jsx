import React from 'react';
import '../styles/AnonymizedCard.css';

const AnonymizedCard = ({ index, link }) => (
  <div className="card-container">
    <h4 className="card-title">Candidate #{index + 1}</h4>
    <a href={link} className="card-link" target="_blank" rel="noreferrer">
      View Anonymous Submission
    </a>
  </div>
);

export default AnonymizedCard;
