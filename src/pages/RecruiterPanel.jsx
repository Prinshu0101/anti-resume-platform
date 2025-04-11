// src/pages/RecruiterPanel.jsx

import React from "react";
import { submissions } from "../data/submissions";

const RecruiterPanel = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Submitted Challenges</h1>

      {submissions.length === 0 ? (
        <p style={{ marginTop: "1rem", color: "gray" }}>No submissions yet.</p>
      ) : (
        <ul style={{ marginTop: "1rem" }}>
          {submissions.map((submission, index) => (
            <li key={index} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
              <p><strong>Candidate Name:</strong> {submission.name}</p>
              <p><strong>Challenge:</strong> {submission.challenge}</p>
              <p><strong>Submission URL:</strong> <a href={submission.url} target="_blank" rel="noopener noreferrer">{submission.url}</a></p>
              <p><strong>Feedback:</strong> {submission.feedback}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecruiterPanel;
