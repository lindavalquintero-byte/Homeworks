function Treeview({ node, selectedNode, onSelect }) {
  const isSelected = selectedNode === node;

  return (
    <ul>
      <li>
        <span
          className={`nodo ${isSelected ? "seleccionado" : ""} ${
            node.type === "file" ? "archivo" : "carpeta"
          }`}
          onClick={() => onSelect(node)}
        >
          {node.type === "folder" ? "📁" : "📄"} {node.name}
          <small className="creado-por"> — {node.createdBy}</small>
        </span>

        {node.children.length > 0 && (
          <ul>
            {node.children.map((child, index) => (
              <Treeview
                key={index}
                node={child}
                selectedNode={selectedNode}
                onSelect={onSelect}
              />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Treeview;