import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VotingPage from "./VotingPage";
import ResultsPage from "./ResultsPage";
import VoterCandidatePage from "./VoterCandidatePage";
import { VoteProvider } from "./VoteContext";

function App() {
  return (
    <VoteProvider>
      <Router>
        <nav style={{ padding: "10px", background: "#333" }}>
          <Link to="/" style={{ color: "white", marginRight: "20px" }}>Voting</Link>
          <Link to="/results" style={{ color: "white" }}>Results</Link>
        </nav>

        <Routes>
          <Route path="/" element={<VotingPage />} />
          <Route path="/voter" element={<VoterCandidatePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </VoteProvider>
  );
}

export default App;
