import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Bienvenido</h1>
        <p>
          <strong>Usuario actual:</strong> {user.email}
        </p>

        <div className="menu">
          <Link to="/stack" className="link-button">
            Ir a Stack
          </Link>

          <Link to="/queue" className="link-button">
            Ir a Queue
          </Link>
        </div>

        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Home;