import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(formData.email, formData.password);

    if (success) {
      setError("");
      navigate("/home");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Inicio de sesión</h1>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Ingresar</button>
        </form>

        {error !== "" && <p className="error">{error}</p>}

        <div className="help-box">
          <p><strong>Usuario de prueba:</strong> user@mail.com</p>
          <p><strong>Contraseña:</strong> 123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;