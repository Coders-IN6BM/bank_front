import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import { toast } from "react-toastify";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (body) => {
    setLoading(true);
    setError(null);

    if (!body.password || body.password.trim() === "") {
      setError("La contraseña no puede estar vacía.");
      toast.error("La contraseña no puede estar vacía.");
      setLoading(false);
      setUser(null);
      return false;
    }

    if (!body.user || body.user.trim() === "") {
      setError("El usuario o email no puede estar vacio.");
      toast.error("El usuario o email no puede estar vacio.");
      setLoading(false);
      setUser(null);
      return false;
    }

    try {
      const response = await loginUser(body);
      const { user, token } = response;
      // Si tu backend responde con userDetails, usa: const { role, token } = response.userDetails;
      if (user && token) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", user.rol || user.role || "");
        setUser(user);
        toast.success("Inicio de sesión exitoso");
        setTimeout(() => navigate("/dashboard"), 150);
        return true;
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || "Credenciales inválidas";
      setError(errorMessage);
      toast.error(errorMessage);
      setUser(null);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user };
}