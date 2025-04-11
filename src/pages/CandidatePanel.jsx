import React, { useState } from "react";

const challenges = [
  {
    id: 1,
    title: "Frontend Design Challenge",
    description: "Design a responsive landing page for a startup.",
  },
  {
    id: 2,
    title: "Backend API Challenge",
    description: "Build a REST API for a job board with Node.js.",
  },
  {
    id: 3,
    title: "Data Analysis Task",
    description: "Analyze hiring trends using a given CSV dataset.",
  },
];

const CandidatePanel = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [submissionText, setSubmissionText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted for "${selectedChallenge.title}":\n${submissionText}`);
    setSelectedChallenge(null);
    setSubmissionText("");
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Available Challenges</h1>

      {selectedChallenge ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">{selectedChallenge.title}</h2>
          <p>{selectedChallenge.description}</p>
          <textarea
            value={submissionText}
            onChange={(e) => setSubmissionText(e.target.value)}
            placeholder="Paste your GitHub repo URL or code snippet..."
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
          <div className="space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setSelectedChallenge(null)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="grid gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="p-4 border rounded-xl hover:shadow transition cursor-pointer"
              onClick={() => setSelectedChallenge(challenge)}
            >
              <h2 className="text-xl font-semibold">{challenge.title}</h2>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidatePanel;
