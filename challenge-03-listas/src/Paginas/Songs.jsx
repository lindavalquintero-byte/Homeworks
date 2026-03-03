import { useState } from "react";
import { LinkedList } from "../EstructuraDatos/LinkedList.js";

export default function Songs({ onBack }) {
  const [state, setState] = useState(() => {
    const list = new LinkedList();

    list.append({ id: 1, title: "Borro Cassette", artist: "Maluma" });
    list.append({ id: 2, title: "Piensas En Mi ", artist: "Nicky Jam" });
    list.append({ id: 3, title: "Fuera del planeta Remix", artist: "Eloy Ft. Zion , Jowell y Randy" });
    list.append({ id: 4, title: "Bad Guy", artist: "Billie Eilish" });
    list.append({ id: 5, title: "Imitadora", artist: "Romeo Santos" });

    return {
      list,
      currentNode: list.head,
    };
  });

  const { list, currentNode } = state;

  const siguiente = () => {
    if (!currentNode || !currentNode.next) return;
    setState({ ...state, currentNode: currentNode.next });
  };

  const reiniciar = () => {
    if (!list.head) return;
    setState({ ...state, currentNode: list.head });
  };

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 15 }}>
        Atras
      </button>

      <h2>Reproduciendo</h2>

      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentNode ? currentNode.value.title : "Sin canción"}
        </div>
        <div style={{ opacity: 0.8 }}>
          {currentNode ? currentNode.value.artist : ""}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={siguiente} disabled={!currentNode || !currentNode.next}>
          Siguiente
        </button>
        <button onClick={reiniciar} disabled={!list.head}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}
