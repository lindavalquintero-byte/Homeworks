import { Link } from "react-router-dom";

function QueuePage() {
  const people = [
    { name: "Laura Gómez", amount: 150000, arrivalDate: "08:15 a. m." },
    { name: "Carlos Pérez", amount: 80000, arrivalDate: "08:18 a. m." },
    { name: "Mariana López", amount: 200000, arrivalDate: "08:22 a. m." },
    { name: "Andrés Ruiz", amount: 50000, arrivalDate: "08:25 a. m." },
  ];

  return (
    <div className="container">
      <div className="card">
        <h1>Página privada - Queue</h1>
        <p>Este ejercicio corresponde al challenge de cola del cajero.</p>

        <h2>Personas en la cola</h2>
        <ul className="simple-list">
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - ${person.amount} - {person.arrivalDate}
            </li>
          ))}
        </ul>

        <Link to="/home" className="link-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default QueuePage;