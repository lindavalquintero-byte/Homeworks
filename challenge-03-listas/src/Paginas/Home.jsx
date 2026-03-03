export default function Home({ onGoSongs, onGoHistory }) {
  return (
    <div>
      <h2>Challenge 03</h2>
      <p>Elige una página:</p>
      <button onClick={onGoSongs} style={{ marginRight: 10 }}>Songs</button>
      <button onClick={onGoHistory}>History</button>
    </div>
  );
}