import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-container">
        <h2 className="home-title">Welcome to the Anti-Resume Platform</h2>
        <p className="home-description">
          Reimagining hiring through skills, fairness, and transparency. No resumes. No bias. Just capability.
        </p>
      </main>
    </>
  );
};

export default Home;
