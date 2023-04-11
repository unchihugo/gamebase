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

//function to add a new game to user's collection
app.post('/games', (req, res) => {
  const { name, genre, subgenres, price, rating, releaseDate, online, story, platforms, developer, publisher, link, coverLink, fkUser } = req.body;
  const sql = `INSERT INTO game (Naam, Genre, SubGenres, Prijs, Beoordeling, PublicatieDatum, Online, Story, Platforms, Developer, Publisher, Link, CoverLink, fkGebruiker) VALUES ('${name}', '${genre}', '${subgenres}', '${price}', '${rating}', '${releaseDate}', '${online}', '${story}', '${platforms}', '${developer}', '${publisher}', '${link}', '${coverLink}', '${fkUser}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Game added successfully');
  });
});

//function to add userdata to a game
app.post('/gamedata', (req, res) => {
  const { fkUser, fkGame, status, hours, achievements, rating, dateAdded} = req.body;
  const sql = `INSERT INTO gebruikergamedata (fkGebruiker, fkGame, Status, AantalUren, AantalPrestaties, EigenBeoordeling, DatumToegevoegd) VALUES ('${fkUser}', '${fkGame}', '${status}', '${hours}', '${achievements}', '${rating}', '${dateAdded}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Game data added successfully');
  });
});

//function to add a new user for sign in
app.post('/users', (req, res) => {
  const { username, password, email } = req.body;
  const sql = `INSERT INTO gebruiker (Gebruikersnaam, Wachtwoord, Email) VALUES ('${username}', '${password}', '${email}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('User added successfully');
  });
});

//update userdata to a game
app.put('/gamedata', (req, res) => {
  const { fkUser, fkGame, status, hours, achievements, rating, dateAdded } = req.body;
  let sql = `UPDATE gebruikergamedata SET `;
  let isFirst = true;

  if (status) {
    sql += `Status = '${status}'`;
    isFirst = false;
  }

  if (hours) {
    sql += isFirst ? `AantalUren = '${hours}'` : `, AantalUren = '${hours}'`;
    isFirst = false;
  }

  if (achievements) {
    sql += isFirst ? `AantalPrestaties = '${achievements}'` : `, AantalPrestaties = '${achievements}'`;
    isFirst = false;
  }

  if (rating) {
    sql += isFirst ? `EigenBeoordeling = '${rating}'` : `, EigenBeoordeling = '${rating}'`;
    isFirst = false;
  }

  if (dateAdded) {
    sql += isFirst ? `DatumToegevoegd = '${dateAdded}'` : `, DatumToegevoegd = '${dateAdded}'`;
  }

  sql += ` WHERE fkGebruiker = '${fkUser}' AND fkGame = '${fkGame}'`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Game data updated successfully');
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});