import { useState } from "react";
import graph from "./data";

function CityFilter() {
  const cities = graph.nodes.filter((n) => n.type === "city");
  const [selectedCity, setSelectedCity] = useState(cities[0].id);

  const people = graph.getPeopleByCity(selectedCity);

  return (
    <div className="city-filter">
      <h2>Personas por ciudad</h2>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.data.name}
          </option>
        ))}
      </select>

      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.data.name} — {person.data.age} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityFilter;