class Node {
  constructor(name, type, createdBy) {
    this.name = name;
    this.type = type; // "folder" o "file"
    this.createdBy = createdBy;
    this.children = [];
  }

  addChild(node) {
    if (this.type === "file") {
      console.log("Un archivo no puede tener hijos");
      return;
    }

    this.children.push(node);
  }
}

class NaryTree {
  constructor(root) {
    this.root = root;
  }
}
export const rebuildTree = (data) => {
  if (!data) return null;

  const node = new Node(data.name, data.type, data.createdBy);

  if (data.children && data.children.length > 0) {
    data.children.forEach((child) => {
      node.addChild(rebuildTree(child));
    });
  }

  return node;
};

export { Node, NaryTree };