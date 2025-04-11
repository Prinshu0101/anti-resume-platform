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

const RecruiterPanel = () => {
  const [submissions, setSubmissions] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('candidateSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Candidate Submissions</h2>
      {challenges.map((challenge) => (
        <div key={challenge.title} className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold">{challenge.title}</h3>
          <p className="text-gray-700 mb-2">{challenge.description}</p>
          {submissions[challenge.title] ? (
            <a
              href={submissions[challenge.title]}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              View Submission
            </a>
          ) : (
            <p className="text-gray-500 italic">No submission yet.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecruiterPanel;
