import { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import BinaryTree from "./BinaryTree";
import { convertToD3 } from "./treeToD3";

function App() {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const tree = new BinaryTree();

    const numbers = [10, 5, 20, 3, 7, 15, 30];

    numbers.forEach(n => tree.insert(n));

    console.log("INORDER");
    tree.inorder();

    console.log("PREORDER");
    tree.preorder();

    console.log("POSTORDER");
    tree.postorder();

    console.log("Buscar 7:", tree.find(7));

    const data = convertToD3(tree.root);
    setTreeData(data);

  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Binary Tree</h1>

      {treeData && (
        <Tree
          data={treeData}
          orientation="vertical"
        />
      )}
    </div>
  );
}

export default App;