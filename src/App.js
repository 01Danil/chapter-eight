import React from "react";
import GitHubUser from "./components/GitHubUser";

export default function App() {
  return (
    <div>
      <h1>GitHub User Info</h1>
      <GitHubUser login="moonhigway" />
    </div>
  );
}
