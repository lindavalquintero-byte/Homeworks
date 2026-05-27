function Recommendation({
  recommendations,
}) {
  return (
    <div className="recommendations">
      <h2>Recomendaciones</h2>

      {recommendations.length === 0 ? (
        <p>No hay recomendaciones</p>
      ) : (
        recommendations.map((song, index) => (
          <div key={index} className="card">
            {song}
          </div>
        ))
      )}
    </div>
  );
}

export default Recommendation;