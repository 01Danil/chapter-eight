/*
import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!login) return;

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return <p>Loading...</p>;
}

export default GitHubUser;
*/