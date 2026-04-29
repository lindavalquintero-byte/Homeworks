import { Graph as D3Graph } from "react-d3-graph";
import graph from "./data";

const graphData = {
  nodes: graph.nodes.map((n) => ({
    id: n.id,
    label: n.data.name,
    color: n.type === "city" ? "#4f46e5" : "#f59e0b",
  })),
  links: [
    { source: "linda", target: "cali" },
    { source: "sofia", target: "cali" },
    { source: "juan", target: "medellin" },
    { source: "maria", target: "medellin" },
    { source: "pedro", target: "bogota" },
  ],
};

const config = {
  nodeHighlightBehavior: true,
  node: {
    color: "#f59e0b",
    size: 400,
    highlightStrokeColor: "blue",
    labelProperty: "label",
    fontSize: 14,
  },
  link: {
    highlightColor: "lightblue",
  },
  height: 500,
  width: 900,
  d3: {
    gravity: -300,
    linkLength: 150,
  },
};

function GraphView() {
  return (
    <div className="graph-view">
      <h2>Grafo de personas y ciudades</h2>
      <p>🟣 Ciudades &nbsp; 🟡 Personas</p>
      <D3Graph id="graph" data={graphData} config={config} />
    </div>
  );
}

export default GraphView;