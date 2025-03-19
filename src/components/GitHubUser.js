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

/*
import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saceJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);
}

export default GitHubUser;
*/

import React, { useState, useEffect } from "react";
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));
  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);
  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
}

export default GitHubUser;

/*
import React, { useState, useEffect } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, { name, login, avatar_url, location });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", width: "300px" }}>
      <h2>{data.name || "No Name"}</h2>
      <img src={data.avatar_url} alt={data.name} style={{ width: "100px", borderRadius: "50%" }} />
      <p>Location: {data.location || "Unknown"}</p>
    </div>
  );
}

export default GitHubUser;
*/
