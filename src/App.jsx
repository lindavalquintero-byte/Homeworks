import { Node } from "./NaryTree";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {

  const root = new Node({
    title: "Menú",
    link: "#",
  });

  const home = new Node({
    title: "Inicio",
    link: "/",
  });

  const products = new Node({
    title: "Productos",
    link: "/products",
  });

  const phones = new Node({
    title: "Celulares",
    link: "/phones",
  });

  const laptops = new Node({
    title: "Laptops",
    link: "/laptops",
  });

  const about = new Node({
    title: "Acerca de",
    link: "/about",
  });

  // construir árbol
  root.addChild(home);
  root.addChild(products);
  root.addChild(about);

  products.addChild(phones);
  products.addChild(laptops);

  return (
    <div className="container">
      <Sidebar node={root} />
    </div>
  );
}

export default App;