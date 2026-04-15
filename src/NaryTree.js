class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class NaryTree {
  constructor() {
    this.root = null;
  }
}

export { Node, NaryTree };