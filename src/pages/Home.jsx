import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await axios.get('../gamebaseApis/gamesApi.php');
    setGames(response.data);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.Naam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedGames = filteredGames.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.Naam.localeCompare(b.Naam);
    } else {
      return b.Naam.localeCompare(a.Naam);
    }
  });

  return (
    <div>
      <h1>Gamebase Library</h1>
      <div>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <select onChange={handleSort}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <ul>
        {sortedGames.map((game) => (
          <li key={game.idGame}>
            <h2>{game.Naam}</h2>
            <p>{game.Prijs}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home