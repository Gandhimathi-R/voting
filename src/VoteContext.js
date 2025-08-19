import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    candidateA: 0,
    candidateB: 0,
    candidateC: 0,
  });

  const castVote = (candidate) => {
    setVotes((prev) => ({
      ...prev,
      [candidate]: prev[candidate] + 1,
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, castVote }}>
      {children}
    </VoteContext.Provider>
  );
};
