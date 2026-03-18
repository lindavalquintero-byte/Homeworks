import { useState } from "react";
import "./App.css";
import Queue from "./Queue";

function App() {
  const generateArrivalDate = () => {
    return new Date().toLocaleString();
  };

  const createInitialQueue = () => {
    const peopleQueue = new Queue();

    peopleQueue.enqueue({
      name: "Laura Gómez",
      amount: 150000,
      arrivalDate: "10/6/2025, 8:15:10 a. m.",
    });

    peopleQueue.enqueue({
      name: "Carlos Pérez",
      amount: 80000,
      arrivalDate: "10/6/2025, 8:18:25 a. m.",
    });

    peopleQueue.enqueue({
      name: "Mariana López",
      amount: 200000,
      arrivalDate: "10/6/2025, 8:22:41 a. m.",
    });

    peopleQueue.enqueue({
      name: "Andrés Ruiz",
      amount: 50000,
      arrivalDate: "10/6/2025, 8:25:03 a. m.",
    });

    return peopleQueue;
  };

  const [queue] = useState(createInitialQueue());
  const [people, setPeople] = useState([...queue.print()]);

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "" || formData.amount.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    const newPerson = {
      name: formData.name,
      amount: formData.amount,
      arrivalDate: generateArrivalDate(),
    };

    queue.enqueue(newPerson);
    setPeople([...queue.print()]);

    setFormData({
      name: "",
      amount: "",
    });
  };

  return (
    <div className="container">
      <h1>Cola del Cajero</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nombre de la persona"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Monto a retirar"
          value={formData.amount}
          onChange={handleChange}
        />

        <button type="submit">Agregar persona</button>
      </form>

      <div className="info">
        <p><strong>Total de personas en la cola:</strong> {queue.size()}</p>
        <p>
          <strong>Primera persona en la cola:</strong>{" "}
          {queue.isEmpty() ? "No hay personas" : queue.peek().name}
        </p>
      </div>

      <h2>Personas en orden de llegada</h2>

      {people.length === 0 ? (
        <p>No hay personas en la cola</p>
      ) : (
        <ul className="person-list">
          {people.map((person, index) => (
            <li key={index} className="person-card">
              <h3>{person.name}</h3>
              <p><strong>Monto a retirar:</strong> ${person.amount}</p>
              <p><strong>Fecha de llegada:</strong> {person.arrivalDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;