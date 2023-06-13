import React, { useState } from "react";

const Inscription = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Vérification de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Adresse e-mail invalide");
      return;
    }

    // Vérification de l'unicité de l'adresse e-mail (ex: en comparant à une liste d'utilisateurs existants)
    const isEmailUnique = checkEmailUniqueness(email);
    if (!isEmailUnique) {
      setErrorMessage("Cette adresse e-mail est déjà utilisée");
      return;
    }

    // Vérification du mot de passe
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas");
      return;
    }

    // Logique d'inscription, comme l'envoi des données d'inscription à un serveur
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Réinitialiser les champs d'inscription après la soumission
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  const checkEmailUniqueness = (email) => {
    // Vérification de l'unicité de l'adresse e-mail, par exemple en comparant à une liste d'utilisateurs existants
    const existingUsers = ["user1@example.com", "user2@example.com"];
    return !existingUsers.includes(email);
  };

  return (
    <div className="register">
      <h2>Inscription</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleRegister}>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Adresse e-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          Confirmer le mot de passe:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
