const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

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
  const { name, genre, subGenres, price, rating, releaseDate, online, story, platforms, developer, publisher, link, coverLink, fkUser } = req.body;
  const onlineValue = online === true ? 1 : 0;
  const storyValue = story === true ? 1 : 0;

  const sql = `INSERT INTO game (Naam, Genre, SubGenres, Prijs, Beoordeling, PublicatieDatum, Online, Story, Platforms, Developer, Publisher, Link, CoverLink, fkGebruiker) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, genre, subGenres, price, rating, releaseDate, onlineValue, storyValue, platforms, developer, publisher, link, coverLink, fkUser];
  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Something went wrong, ensure that all fields are filled in correctly' });
    };
    res.send('Game added successfully');
  });
});

//function to add userdata to a game
app.post('/gamedata', (req, res) => {
  const { fkUser, fkGame, status, hours, achievements, rating, dateAdded} = req.body;
  const sql = `INSERT INTO gebruikergamedata (fkGebruiker, fkGame, Status, AantalUren, AantalPrestaties, EigenBeoordeling, DatumToegevoegd) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [fkUser, fkGame, status, hours, achievements, rating, dateAdded], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Something went wrong, ensure that all fields are filled in correctly' });
    };
    res.send('Game data added successfully');
  });
});

//function to add a new user for sign in
app.post('/users', (req, res) => {
  const { username, password, name } = req.body;
  const sql = 'INSERT INTO gebruiker (Gebruikersnaam, Wachtwoord, Naam) VALUES (?, ?, ?)';
  db.query(sql, [username, password, name], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).json({ error: 'Username already exists' });
      } else {
        res.status(500).json({ error: 'Something went wrong, ensure that all fields are filled in correctly' });
      }
    } else {
      res.send('User added successfully');
    }
  });
});


//update userdata to a game
app.put('/gamedataupdate', (req, res) => {
  const { fkUser, fkGame, status, hours, achievements, rating, dateAdded } = req.body;
  let sql = `UPDATE gebruikergamedata SET `;
  const values = [];

  if (status) {
    sql += `Status = ?`;
    values.push(status);
  }

  if (hours) {
    sql += values.length === 0 ? `AantalUren = ?` : `, AantalUren = ?`;
    values.push(hours);
  }

  if (achievements) {
    sql += values.length === 0 ? `AantalPrestaties = ?` : `, AantalPrestaties = ?`;
    values.push(achievements);
  }

  if (rating) {
    sql += values.length === 0 ? `EigenBeoordeling = ?` : `, EigenBeoordeling = ?`;
    values.push(rating);
  }

  if (dateAdded) {
    sql += values.length === 0 ? `DatumToegevoegd = ?` : `, DatumToegevoegd = ?`;
    values.push(dateAdded);
  }

  sql += ` WHERE fkGebruiker = ? AND fkGame = ?`;
  values.push(fkUser, fkGame);

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send('Game data updated successfully');
  });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});