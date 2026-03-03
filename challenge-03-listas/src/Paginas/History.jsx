import { useState } from "react";
import { DoublyLinkedList } from "../EstructuraDatos/DoublyLinked.js";

export default function History({ onBack }) {
  const [state, setState] = useState(() => {
    const list = new DoublyLinkedList();

  
    list.append({ id: 1, title: "BlushBar", url: "https://www.blushbar.com" });
    list.append({ id: 2, title: "RareBeauty", url: "https://www.RareBeauty.com" });
    list.append({ id: 3, title: "Atenea", url: "https://www.AteneaProfesional.com" });

    return {
      list,
      currentNode: list.tail, // empieza en la última visitada
    };
  });

  const { currentNode } = state;

  const anterior = () => {
    if (!currentNode || !currentNode.prev) return;
    setState({ ...state, currentNode: currentNode.prev });
  };

  const siguiente = () => {
    if (!currentNode || !currentNode.next) return;
    setState({ ...state, currentNode: currentNode.next });
  };

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 15 }}>← Volver</button>

      <h2>Historial</h2>

      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentNode ? currentNode.value.title : "Sin página"}
        </div>
        <div style={{ opacity: 0.8 }}>
          {currentNode ? currentNode.value.url : ""}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={anterior} disabled={!currentNode || !currentNode.prev}>
          Anterior
        </button>
        <button onClick={siguiente} disabled={!currentNode || !currentNode.next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

