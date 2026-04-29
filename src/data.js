import { Node, Graph } from "./Graph";

const graph = new Graph();


const cali = new Node("cali", "city", { name: "Cali" });
const medellin = new Node("medellin", "city", { name: "Medellín" });
const bogota = new Node("bogota", "city", { name: "Bogotá" });

const linda = new Node("linda", "person", { name: "Linda", age: 19 });
const sofia = new Node("sofia", "person", { name: "Sofía", age: 23 });
const juan = new Node("juan", "person", { name: "Juan", age: 25 });
const maria = new Node("maria", "person", { name: "María", age: 22 });
const pedro = new Node("pedro", "person", { name: "Pedro", age: 27 });

graph.addNode(cali);
graph.addNode(medellin);
graph.addNode(bogota);
graph.addNode(linda);
graph.addNode(sofia);
graph.addNode(juan);
graph.addNode(maria);
graph.addNode(pedro);

graph.addEdge("linda", "cali");
graph.addEdge("sofia", "cali");
graph.addEdge("juan", "medellin");
graph.addEdge("maria", "medellin");
graph.addEdge("pedro", "bogota");

export default graph;