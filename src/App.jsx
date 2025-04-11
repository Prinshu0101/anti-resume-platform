import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePanel from "./pages/CandidatePanel";
import RecruiterPanel from "./pages/RecruiterPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candidate" element={<CandidatePanel />} />
        <Route path="/recruiter" element={<RecruiterPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
