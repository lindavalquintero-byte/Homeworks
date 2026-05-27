import { useState } from "react";

import Trie from "./Trie";
import MaxHeap from "./MaxHeap";
import Graph from "./Graph";

import Ranking from "./Ranking";
import Recommendation from "./Recommendation";
import SongList from "./SongList";

import "./App.scss";

const trie = new Trie();

trie.insert("Stay");
trie.insert("Starboy");
trie.insert("Blinding Lights");
trie.insert("Save Your Tears");
trie.insert("Shape of You");
trie.insert("Levitating");
trie.insert("As It Was");
trie.insert("Perfect");
trie.insert("Bad Habits");
trie.insert("Believer");
trie.insert("Someone Like You");
trie.insert("Calm Down");
trie.insert("Flowers");
trie.insert("Happier");
trie.insert("Senorita");

const heap = new MaxHeap();

heap.insert("Blinding Lights", 980);
heap.insert("Starboy", 920);
heap.insert("Stay", 890);
heap.insert("Shape of You", 850);
heap.insert("Levitating", 800);
heap.insert("As It Was", 760);
heap.insert("Perfect", 720);
heap.insert("Bad Habits", 690);
heap.insert("Believer", 650);
heap.insert("Flowers", 620);

const topSongs = heap.getTopSongs();

const graph = new Graph();

graph.addSong("Blinding Lights");
graph.addSong("Starboy");
graph.addSong("Stay");
graph.addSong("Save Your Tears");
graph.addSong("Levitating");
graph.addSong("As It Was");
graph.addSong("Perfect");
graph.addSong("Someone Like You");
graph.addSong("Bad Habits");
graph.addSong("Shape of You");
graph.addSong("Flowers");
graph.addSong("Happier");
graph.addSong("Calm Down");
graph.addSong("Senorita");

graph.connectSongs(
  "Blinding Lights",
  "Starboy"
);

graph.connectSongs(
  "Blinding Lights",
  "Save Your Tears"
);

graph.connectSongs(
  "Stay",
  "Starboy"
);

graph.connectSongs(
  "Levitating",
  "As It Was"
);

graph.connectSongs(
  "Perfect",
  "Someone Like You"
);

graph.connectSongs(
  "Bad Habits",
  "Shape of You"
);

graph.connectSongs(
  "Flowers",
  "Happier"
);

graph.connectSongs(
  "Calm Down",
  "Senorita"
);

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const [recommendations, setRecommendations] =
    useState([]);

  
  const handleSearch = () => {
    const data = trie.suggestions(search);
    setResults(data);
  };

 
  const handleRecommendations = (song) => {
    const data =
      graph.getRecommendations(song);

    setRecommendations(data);
  };

  return (
    <div className="container">
      <h1>Spotify Educativo</h1>

      {/* BUSCADOR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar canción"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {/* SECCIONES */}
      <div className="sections">
        <SongList
          results={results}
          handleRecommendations={
            handleRecommendations
          }
        />

        <div className="box">
          <Recommendation
            recommendations={recommendations}
          />
        </div>
      </div>

      {/* RANKING */}
      <div className="box ranking">
        <Ranking songs={topSongs} />
      </div>
    </div>
  );
}

export default App;