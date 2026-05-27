function SongList({
  results,
  handleRecommendations,
}) {
  return (
    <div className="box">
      <h2>Resultados</h2>

      {results.length === 0 ? (
        <p>No hay canciones</p>
      ) : (
        results.map((song, index) => (
          <div key={index} className="card">
            <p>{song}</p>

            <button
              onClick={() =>
                handleRecommendations(song)
              }
            >
              Ver relacionadas
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SongList;