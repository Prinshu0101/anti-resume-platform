import React from 'react';
import Header from '../components/Header';
import '../styles/AIEngine.css';

const AIEngine = () => {
  return (
    <>
      <Header />
      <main className="ai-container">
        <h2 className="ai-title">AI Matching Engine</h2>
        <p className="ai-description">
          Our AI analyzes submitted challenges and matches candidates to roles based on skill alignment and company needs—fully blind and bias-free.
        </p>
        <p className="ai-note">
          [This section will be powered by a future ML pipeline. Placeholder for now.]
        </p>
      </main>
    </>
  );
};

export default AIEngine;
