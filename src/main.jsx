import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CandidatePanel from "./pages/CandidatePanel";
import RecruiterPanel from "./pages/RecruiterPanel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/candidate" element={<CandidatePanel />} />
      <Route path="/recruiter" element={<RecruiterPanel />} />
    </Routes>
  </BrowserRouter>
);
