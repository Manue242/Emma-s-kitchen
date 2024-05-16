import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUpForm.css';

function SignUpForm({ navigateToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Compte créé avec succès !');
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Créer un compte</h2>
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
      <button onClick={handleSignUp} className="sign-up-button">Créer un compte</button>
      <p>Vous avez déjà un compte ? <a href="#" onClick={navigateToLogin}>Connectez-vous ici</a>.</p>
    </div>
  );
}

export default SignUpForm;
