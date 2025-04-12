import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { challenges } from '../data/challenges';
import '../styles/CandidatePanel.css';

const CandidatePanel = () => {
  const [submissions, setSubmissions] = useState(() => {
    const stored = localStorage.getItem('candidateSubmissions');
    return stored ? JSON.parse(stored) : {};
  });

  const handleSubmit = (challenge) => {
    const link = prompt(`Enter your link for "${challenge.title}"`);
    if (link && link.startsWith('http')) {
      const updated = { ...submissions, [challenge.title]: link };
      setSubmissions(updated);
      localStorage.setItem('candidateSubmissions', JSON.stringify(updated));
    } else {
      alert('Invalid link. Must start with http/https.');
    }
  };

  return (
    <>
      <Header />
      <div className="candidate-container">
        <h2 className="candidate-title">Candidate Challenges</h2>
        {challenges.map((challenge) => (
          <div key={challenge.title} className="challenge-card">
            <h3 className="challenge-heading">{challenge.title}</h3>
            <p className="challenge-desc">{challenge.description}</p>
            <button
              onClick={() => handleSubmit(challenge)}
              className="submit-btn"
            >
              Submit
            </button>
            {submissions[challenge.title] && (
              <p className="submission-link">
                Submitted:{' '}
                <a
                  href={submissions[challenge.title]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {submissions[challenge.title]}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CandidatePanel;
