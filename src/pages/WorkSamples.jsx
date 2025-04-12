import React from 'react';
import Header from '../components/Header';
import AnonymizedCard from '../components/AnonymizedCard';
import '../styles/WorkSamples.css';

const links = [
  'https://example.com/submission-1',
  'https://example.com/submission-2',
  'https://example.com/submission-3',
];

const WorkSamples = () => {
  return (
    <>
      <Header />
      <main className="work-samples-container">
        <h2 className="work-samples-title">Anonymous Candidate Submissions</h2>
        {links.map((link, i) => (
          <AnonymizedCard key={i} index={i} link={link} />
        ))}
      </main>
    </>
  );
};

export default WorkSamples;
