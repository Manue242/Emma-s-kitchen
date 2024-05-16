import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginForm.css';

function LoginForm({ navigateToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Connexion réussie !');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSignIn} className="login-button">Se connecter</button>
      <p>
        Vous n'avez pas de compte ? <a href="#" onClick={navigateToSignUp}>Créez-en un ici</a>
      </p>
    </div>
  );
}

export default LoginForm;
