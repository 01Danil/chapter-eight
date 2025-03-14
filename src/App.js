import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/moonhighway")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <h1>Ошибка: {error.message}</h1>;
  }

  return (
    <div>
      <h1>GitHub User</h1>
      {user ? (
        <div>
          <img src={user.avatar_url} alt="Avatar" width="100" />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default App;
