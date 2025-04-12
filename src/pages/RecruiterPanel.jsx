import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { challenges } from '../data/challenges';
import '../styles/RecruiterPanel.css';

const RecruiterPanel = () => {
  const [submissions, setSubmissions] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('candidateSubmissions');
    if (stored) setSubmissions(JSON.parse(stored));
  }, []);

  return (
    <>
      <Header />
      <div className="recruiter-container">
        <h2 className="recruiter-title">Candidate Submissions</h2>
        {challenges.map((challenge) => (
          <div key={challenge.title} className="recruiter-card">
            <h3>{challenge.title}</h3>
            <p className="recruiter-description">{challenge.description}</p>
            {submissions[challenge.title] ? (
              <a
                href={submissions[challenge.title]}
                target="_blank"
                rel="noreferrer"
                className="recruiter-link"
              >
                View Submission
              </a>
            ) : (
              <p className="recruiter-empty">No submission yet.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecruiterPanel;
