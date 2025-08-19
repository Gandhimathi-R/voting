import React from "react";
import { Link } from "react-router-dom";

function VoterCandidatePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Thank You for Voting!</h2>
      <p>Your vote has been recorded.</p>
      
      <Link to="/results">
        <button style={{ background: "#007bff", color: "white", marginTop: "20px" }}>
          View Results
        </button>
      </Link>
    </div>
  );
}

export default VoterCandidatePage;
