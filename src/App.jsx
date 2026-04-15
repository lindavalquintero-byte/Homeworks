import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Node, rebuildTree } from "./NaryTree";
import { saveTree, loadTree } from "./Storage";
import Login from "./Login";
import TreeView from "./Treeview";
import "./App.css";

function App() {
  const { user, logout } = useContext(AuthContext);

  const [tree, setTree] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("folder");
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const saved = loadTree();
    if (saved) {
      const rebuilt = rebuildTree(saved);
      setTree(rebuilt);
      setSelectedNode(rebuilt);
    } else {
      const root = new Node("Raiz", "folder", user?.email);
      setTree(root);
      setSelectedNode(root);
    }
  }, []);

  if (!user) {
    return <Login />;
  }

  const handleAdd = () => {
    if (!name || !selectedNode) return;

    if (selectedNode.type === "file") {
      alert("No puedes agregar elementos dentro de un archivo");
      return;
    }

    const newNode = new Node(name, type, user.email);
    selectedNode.addChild(newNode);
    const updatedTree = rebuildTree(JSON.parse(JSON.stringify(tree)));
    setTree(updatedTree);
    saveTree(tree);
    setName("");
  };

  if (!tree) return null;

  return (
    <div className="app-container">
      <div className="header">
        <h2> Gestor de Archivos</h2>
        <div className="user-info">
          <span>{user.email}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </div>

      <div className="form-agregar">
        <span>
          Agregando en:{" "}
          <strong>{selectedNode ? selectedNode.name : "ninguno"}</strong>
        </span>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="folder">Carpeta</option>
          <option value="file">Archivo</option>
        </select>
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <TreeView
        node={tree}
        selectedNode={selectedNode}
        onSelect={setSelectedNode}
      />
    </div>
  );
}

export default App;