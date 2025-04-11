import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CandidatePanel from './pages/CandidatePanel';
import RecruiterPanel from './pages/RecruiterPanel';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<CandidatePanel />} />
        <Route path="/recruiter" element={<RecruiterPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
