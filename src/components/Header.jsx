import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Anti-Resume Platform</h1>
        <nav className="header-nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/candidate" className="header-link">Candidate</Link>
          <Link to="/recruiter" className="header-link">Recruiter</Link>
          <Link to="/work-samples" className="header-link">Work Samples</Link>
          <Link to="/ai-matching" className="header-link">AI Match</Link>
          <Link to="/feedback" className="header-link">Feedback</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
