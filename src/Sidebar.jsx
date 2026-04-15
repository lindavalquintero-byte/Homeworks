function Sidebar({ node }) {
  return (
    <ul>
      <li>
        <a href={node.value.link}>{node.value.title}</a>

        {node.children.length > 0 && (
          <ul>
            {node.children.map((child, index) => (
              <Sidebar key={index} node={child} />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Sidebar;