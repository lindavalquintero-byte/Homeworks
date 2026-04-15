export const saveTree = (tree) => {
  localStorage.setItem("tree", JSON.stringify(tree));
};

export const loadTree = () => {
  const data = localStorage.getItem("tree");
  return data ? JSON.parse(data) : null;
};