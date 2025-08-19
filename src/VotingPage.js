import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";
import { useNavigate } from "react-router-dom";

function VotingPage() {
  const { castVote } = useContext(VoteContext);
  const navigate = useNavigate();

  const handleVote = (candidate) => {
    castVote(candidate);      // update vote count
    navigate("/voter");       // go to thank you page
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🗳️ Vote for Your Candidate</h2>

      <div style={{ margin: "15px", background: "#ffe0e0", padding: "10px", borderRadius: "8px" }}>
        <button style={{ background: "#ff4d4d", color: "white" }} onClick={() => handleVote("candidateA")}>
          Vote Candidate A
        </button>
      </div>

      <div style={{ margin: "15px", background: "#e0ffe0", padding: "10px", borderRadius: "8px" }}>
        <button style={{ background: "#28a745", color: "white" }} onClick={() => handleVote("candidateB")}>
          Vote Candidate B
        </button>
      </div>

      <div style={{ margin: "15px", background: "#e0e0ff", padding: "10px", borderRadius: "8px" }}>
        <button style={{ background: "#007bff", color: "white" }} onClick={() => handleVote("candidateC")}>
          Vote Candidate C
        </button>
      </div>
    </div>
  );
}

export default VotingPage;
