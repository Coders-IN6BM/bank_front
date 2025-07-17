

import React, { useState } from "react";
import "./loginForm.css";
import { useLogin } from "../../shared/hooks/useLogin";

const LoginForm = () => {
  const [userOrEmail, setUserOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userOrEmail || !password) {
      setLocalError("Por favor, completa todos los campos.");
      return;
    }
    setLocalError("");
    await login({ user: userOrEmail, email: userOrEmail, password });
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario o Email"
          value={userOrEmail}
          onChange={(e) => setUserOrEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {(localError || error) && (
          <div className="login-error">{localError || error}</div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
