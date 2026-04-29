import GraphView from "./GraphView";
import CityFilter from "./CityFilter";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Challenge 10 — Grafos</h1>
      <GraphView />
      <CityFilter />
    </div>
  );
}

export default App;