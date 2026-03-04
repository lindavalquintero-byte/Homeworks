import { useState } from "react";

export default function Formulario({anadir}){
    const [name, setName]= useState("");
    const [phone, setPhone] = useState ("");
     
    const handleSubmit = (e)=> {
        e.preventDefault();

        const limpiarNombre = name.trim();
        const limpiarTelefono = phone.trim();
        if(limpiarNombre === "" || limpiarTelefono === ""){
            alert("Por favor escribe tu nombre y telefono.")
            return;
        }
        anadir(limpiarNombre,limpiarTelefono);

        setName("");
        setPhone("");
    };
     return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
      </div>

      <div>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Teléfono"
        />
      </div>

      <button type="submit">Agregar</button>
    </form>
  );
}
