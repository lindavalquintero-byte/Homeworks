import { useState } from "react";
import Home from "./Paginas/Home.jsx";
import Songs from "./Paginas/Songs.jsx";
import History from "./Paginas/History.jsx";

export default function App() {
  const [page, setPage] = useState("home"); 

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      {page === "home" && <Home onGoSongs={() => setPage("songs")} onGoHistory={() => setPage("history")} />}
      {page === "songs" && <Songs onBack={() => setPage("home")} />}
      {page === "history" && <History onBack={() => setPage("home")} />}
    </div>
  );
}