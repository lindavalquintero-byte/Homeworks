import { useState } from "react";
import "./App.css";
import Stack from "./Stack";

function App() {
  const createInitialStack = () => {
    const booksStack = new Stack();

    booksStack.push({
      name: "Cómo dejar de ser tu peor enemigo",
      isbn: "9789584290601",
      author: "Rafael Santandreu",
      editorial: "Grijalbo",
    });

    booksStack.push({
      name: "Cómo hacer que te pasen cosas buenas",
      isbn: "9788467053302",
      author: "Marian Rojas Estapé",
      editorial: "Espasa",
    });

    booksStack.push({
      name: "Este dolor no es mío",
      isbn: "9788418118644",
      author: "Mark Wolynn",
      editorial: "Gaia Ediciones",
    });

    booksStack.push({
      name: "Encuentra tu persona vitamina",
      isbn: "9788467061444",
      author: "Marian Rojas Estapé",
      editorial: "Espasa",
    });

    return booksStack;
  };

  const [stack] = useState(createInitialStack());

  const [books, setBooks] = useState([...stack.print()]);

  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author: "",
    editorial: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.isbn.trim() === "" ||
      formData.author.trim() === "" ||
      formData.editorial.trim() === ""
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    const newBook = {
      name: formData.name,
      isbn: formData.isbn,
      author: formData.author,
      editorial: formData.editorial,
    };

    stack.push(newBook);
    setBooks([...stack.print()]);

    setFormData({
      name: "",
      isbn: "",
      author: "",
      editorial: "",
    });
  };

  return (
    <div className="container">
      <h1>Pila de Libros</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nombre del libro"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="editorial"
          placeholder="Editorial"
          value={formData.editorial}
          onChange={handleChange}
        />

        <button type="submit">Agregar libro</button>
      </form>

      <div className="info">
        <p><strong>Total de libros:</strong> {stack.size()}</p>
        <p>
          <strong>Libro en la cima:</strong>{" "}
          {stack.isEmpty() ? "No hay libros" : stack.peek().name}
        </p>
      </div>

      <h2>Contenido de la pila</h2>

      {books.length === 0 ? (
        <p>No hay libros en la pila</p>
      ) : (
        <ul className="book-list">
          {[...books].reverse().map((book, index) => (
            <li key={index} className="book-card">
              <h3>{book.name}</h3>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Editorial:</strong> {book.editorial}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;