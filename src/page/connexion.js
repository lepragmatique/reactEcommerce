import React, { useState } from "react";
import './login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logique de connexion, comme l'envoi des données de connexion à un serveur
    console.log("Username:", username);
    console.log("Password:", password);
    // Réinitialiser les champs de connexion après la soumission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
