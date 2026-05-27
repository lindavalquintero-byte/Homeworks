function TrieView({ results }) {
  return (
    <div>
      <h2>Resultados</h2>

      {results.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        results.map((product, index) => (
          <div key={index} className="card">
            <h3>{product.name}</h3>
            <p>Popularidad: {product.popularity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TrieView;