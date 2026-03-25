import { Link } from "react-router-dom";

function StackPage() {
  const books = [
    "Cómo dejar de ser tu peor enemigo",
    "Cómo hacer que te pasen cosas buenas",
    "Este dolor no es mío",
    "Encuentra tu persona vitamina",
  ];

  return (
    <div className="container">
      <div className="card">
        <h1>Página privada - Stack</h1>
        <p>Este ejercicio corresponde al challenge de pila de libros.</p>

        <h2>Libros en la pila</h2>
        <ul className="simple-list">
          {[...books].reverse().map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>

        <Link to="/home" className="link-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default StackPage;