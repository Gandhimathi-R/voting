import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

function ResultsPage() {
  const { votes } = useContext(VoteContext);

  const totalVotes = votes.candidateA + votes.candidateB + votes.candidateC;

  let leader = "No votes yet";
  if (totalVotes > 0) {
    const maxVotes = Math.max(votes.candidateA, votes.candidateB, votes.candidateC);
    if (maxVotes === votes.candidateA) leader = "Candidate A";
    else if (maxVotes === votes.candidateB) leader = "Candidate B";
    else leader = "Candidate C";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>📊 Voting Results</h2>
      
      <div style={{ background: "#ffe0e0", padding: "10px", borderRadius: "10px", margin: "10px" }}>
        Candidate A: {votes.candidateA}
      </div>

      <div style={{ background: "#e0ffe0", padding: "10px", borderRadius: "10px", margin: "10px" }}>
        Candidate B: {votes.candidateB}
      </div>

      <div style={{ background: "#e0e0ff", padding: "10px", borderRadius: "10px", margin: "10px" }}>
        Candidate C: {votes.candidateC}
      </div>

      <h3 style={{ marginTop: "20px", background: "#fff3cd", padding: "10px", borderRadius: "8px" }}>
        🏆 Leading Candidate: {leader}
      </h3>
    </div>
  );
}

export default ResultsPage;
