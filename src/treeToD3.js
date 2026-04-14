export const convertToD3 = (node) => {
  if (!node) return null;

  return {
    name: node.value.toString(),
    children: [
      convertToD3(node.left),
      convertToD3(node.right),
    ].filter(Boolean),
  };
};