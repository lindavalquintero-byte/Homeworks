import { useEffect, useState } from "react";
import Cargando from "./contacto/Cargando.jsx";
import Formulario from "./contacto/Formulario.jsx";
import Lista from "./contacto/lista.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const contactosIniciales = [
        { id: 1, name: "Ana", phone: "3001112233" },
        { id: 2, name: "Luis", phone: "3014445566" },
        { id: 3, name: "Valentina", phone: "3027778899" },
      ];
      setContactos(contactosIniciales);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const addContacto = (name, phone) => {
    const newContact = { id: Date.now(), name, phone };
    setContactos((prev) => [...prev, newContact]);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  if (loading) return <Cargando />;

  return (
    <div className="app">
      <h2>Contactos</h2>

      <Formulario anadir={addContacto} />

      <Lista contacto={contactos} eliminar={eliminarContacto} />
    </div>
  );
}