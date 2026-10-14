import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./../css/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(username, password);

    if (success) {
      navigate("/");
    } else {
      setErrorMessage("Feil brukernavn eller passord");
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-logo">sammen</h1>
      <p className="login-subtitle">Logg inn med innloggingsinformasjonen du har fått fra Sammen</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {errorMessage && <p className="login-error">{errorMessage}</p>}
        <button type="submit" className="login-button">
          Logg inn
        </button>
      </form>
    </div>
  );
}

export default LoginPage;