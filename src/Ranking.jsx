function Ranking({ songs }) {
  return (
    <div className="ranking">
      <h2>Top Canciones</h2>

      {songs.map((song, index) => (
        <div key={index} className="card">
          <h3>
            #{index + 1} {song.song}
          </h3>

          <p>
            Reproducciones: {song.plays}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Ranking;