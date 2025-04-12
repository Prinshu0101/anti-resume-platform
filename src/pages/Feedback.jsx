import React from 'react';
import Header from '../components/Header';
import '../styles/Feedback.css';

const Feedback = () => {
  return (
    <>
      <Header />
      <main className="feedback-container">
        <h2 className="feedback-title">Post-Hire Feedback Loop</h2>
        <p className="feedback-description">
          We collect structured feedback from both candidates and employers after hiring to constantly refine our matching algorithms and experience.
        </p>
        <form className="feedback-form">
          <div>
            <label>Your Feedback</label>
            <textarea rows="4" placeholder="Share thoughts..."></textarea>
          </div>
          <button>Submit</button>
        </form>
      </main>
    </>
  );
};

export default Feedback;
