import { useEffect, useState } from 'react'
import { CircularLinkedList } from  "./Listas/CircularLinkedList.js";
import { DoubleLinkedList } from  "./Listas/DoubleLinkedList.js";
import { LinkedList } from "./Listas/LinkedList.js";

export default function App(){
  const [refresh, setRefresh] = useState(0);
  const [listaEspera] = useState (() => new LinkedList());
  const [listaHistorial] = useState (()=> new DoubleLinkedList());
  const [doctores] = useState (()=> new CircularLinkedList());

  const [paciente, setPaciente] = useState("");
  const [doctor, setDoctor] = useState("")
  useEffect(() => {
      doctores.append({nombre: "Dr. Manuel"});
      doctores.append({nombre: "Dr. Miguel"});
      doctores.append({nombre: "Dr. Linda"});

      listaEspera.append({paciente: "Nicolas"});
      listaEspera.append({paciente: "Esteban"});

      setRefresh(s => s + 1);
  }, []);
  useEffect(() =>{
    const id = setInterval(() => {
          doctores.next();
          setRefresh((r)=>r+1)
     }, 10000);

     return () => {
       clearInterval(id);
     };
      }, [doctores]);

      useEffect(() => {
      console.log("Espera: ", listaEspera.print());
      console.log("Historial: ", listaHistorial.print());
      console.log("Medico en turno: ", doctores.print());
    }, [refresh,listaEspera,listaHistorial,doctores]);

    const addPaciente = () => {
      if(paciente === "") return;
      
      listaEspera.append({ nombre: paciente });
      setPaciente("");
      setRefresh((r)=>r+1);
    };
    const addDoctor = () => {
      const n = doctor.trim();
      if(n === "") return;
      

      doctores.append({ nombre: n});
      setDoctor("");
      setRefresh((r)=>r+1);
    };
    const atenderPaciente = () => {
      const p = listaEspera.removeHead();
      if(!p) return;
      const doc =doctores.currentValue();
      listaHistorial.append({
        paciente: p.nombre,
        doctor: doc? doc.nombre: "Sin doctor",
      });
    }
    const listaDeEspera = () => {
      const items = [];
      let current = listaEspera.head;
      while(current){
        items.push(<li key={current.value.nombre}>{current.value.nombre}</li>);
        current = current.next;
      }
    return items.length === 0 ? <p>No hay pacientes en espera</p> : <ul>{items}</ul>;
    };
    const listadeHistorial = () => {
    const items = [];
    let current = listaHistorial.head;

    while (current) {
      const v = current.value;
      items.push(
        <li key={`${v.paciente}-${v.doctor}-${items.length}`}>
          {v.patient} (atendido por {v.doctor})
        </li>
      );
      current = current.next;
    }

    return items.length === 0 ? <p>No hay historial.</p> : <ul>{items}</ul>;
  };

      return (
    <div>
      <h2>Clínica - Parcial (mínimo)</h2>

      <h3>Médico de guardia</h3>
      <p>{doctores.currentValue()?.nombre || "Sin médicos"}</p>

      <h3>Agregar médico</h3>
      <input
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        placeholder="Nombre del médico"
      />
      <button onClick={addDoctor}>Agregar</button>

      <h3>Pacientes en espera (lista simple)</h3>
      <input
        value={paciente}
        onChange={(e) => setPaciente(e.target.value)}
        placeholder="Nombre del paciente"
      />
      <button onClick={addPaciente}>Agregar</button>
      <button onClick={atenderPaciente}>Atender</button>
      {listaDeEspera()}

      <h3>Historial</h3>
      {listadeHistorial()}

    </div>
  );
    }
    
