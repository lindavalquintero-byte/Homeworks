import { useState } from "react";
import Trie from "./Trie";
import TrieView from "./TrieView";
import "./App.css";

function App() {
  const trie = new Trie();

  trie.insert("air max", 90);
  trie.insert("air force", 95);
  trie.insert("air jordan", 85);
  trie.insert("adidas boost", 80);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const data = trie.searchTopK(search, 2);
    setResults(data);
  };

  return (
    <div className="container">
      <h1>Buscador de Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      <TrieView results={results} />
    </div>
  );
}

export default App;
