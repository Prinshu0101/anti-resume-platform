import React, { useState, useEffect } from 'react';

const challenges = [
  {
    title: 'Frontend Design Challenge',
    description: 'Design a responsive landing page for a startup.',
  },
  {
    title: 'Backend API Challenge',
    description: 'Build a REST API for a job board with Node.js.',
  },
  {
    title: 'Data Analysis Task',
    description: 'Analyze hiring trends using a given CSV dataset.',
  },
];

const CandidatePanel = () => {
  const [submissions, setSubmissions] = useState(() => {
    const stored = localStorage.getItem('candidateSubmissions');
    return stored ? JSON.parse(stored) : {};
  });

  const handleSubmit = (challenge) => {
    const link = prompt(`Submit your link for "${challenge.title}":`);
    if (link && link.startsWith('http')) {
      const updated = { ...submissions, [challenge.title]: link };
      setSubmissions(updated);
      localStorage.setItem('candidateSubmissions', JSON.stringify(updated));
      alert(`Submitted for "${challenge.title}": ${link}`);
    } else {
      alert('Please enter a valid link starting with http/https.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Challenges</h2>
      {challenges.map((challenge) => (
        <div key={challenge.title} className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-gray-700 mb-2">{challenge.description}</p>
          <button
            onClick={() => handleSubmit(challenge)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          {submissions[challenge.title] && (
            <p className="mt-2 text-sm text-green-700">
              Submitted: <a href={submissions[challenge.title]} className="underline" target="_blank" rel="noreferrer">{submissions[challenge.title]}</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CandidatePanel;