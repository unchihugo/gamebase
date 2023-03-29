const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'gamebase_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/games', (req, res) => {
  const { name, genre, subgenres, price, rating, releaseDate, online, story, platforms, developer, publisher, link, coverLink, fkUser } = req.body;
  const sql = `INSERT INTO game (Naam, Genre, SubGenres, Prijs, Beoordeling, PublicatieDatum, Online, Story, Platforms, Developer, Publisher, Link, CoverLink, fkGebruiker) VALUES ('${name}', '${genre}', '${subgenres}', '${price}', '${rating}', '${releaseDate}', '${online}', '${story}', '${platforms}', '${developer}', '${publisher}', '${link}', '${coverLink}', '${fkUser}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Game added successfully');
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});