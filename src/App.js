import React, { useEffect, useState } from "react";
import { requestGithubUser } from "./components/requestGithubUser";

function App() {
  useEffect(() => {
    requestGithubUser("MoonHighway");
  }, []);

  return (
    <div>
      <h1>GitHub User Fetch</h1>
      <p>Открывай консоль, чтобы увидеть данные</p>
    </div>
  );
}

export default App;
