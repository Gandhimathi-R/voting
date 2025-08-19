import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VoteProvider } from "./VoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <VoteProvider>
    <App />
  </VoteProvider>
);
