class Node {
  constructor(id, type, data) {
    this.id = id;
    this.type = type; 
    this.data = data; 
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacency = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacency[node.id] = [];
  }

  addEdge(idA, idB) {
    this.adjacency[idA].push(idB);
    this.adjacency[idB].push(idA);
  }

  getPeopleByCity(cityId) {
    const connections = this.adjacency[cityId];
    return this.nodes.filter(
      (n) => n.type === "person" && connections.includes(n.id)
    );
  }

  searchNode(id) {
    return this.nodes.find((n) => n.id === id);
  }
}

export { Node, Graph };