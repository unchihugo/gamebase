import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import '../index.css';
import GameGrid from '../templates/GameGrid';
import PopularGrid from '../templates/PopularGrid';


const Home = () => {
  const [games, setGames] = useState([]);
  const [gamesData, setGamesData] = useState([]);
  const [userGamesData, setUserGamesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('Naam');
  const [paidGames, setPaidGames] = useState(true);
  const [freeGames, setFreeGames] = useState(true);
  const localServer = true;

  useEffect(() => {
    // if (games !== []){
      fetchGames();
    // }
  }, []);

  useEffect(() => {
    let idGebruiker = localStorage.getItem("idGebruiker");
    let correctGames;

    //includes idGebruiker in fkGebruiker or fkGebruiker is null
    if (idGebruiker !== null) {
      correctGames = _.filter(games, (game) =>
        game.fkGebruiker === idGebruiker || game.fkGebruiker === null
      );
    } else {
      correctGames = _.filter(games, (game) => 
        game.fkGebruiker === null);
    }

    if (!_.isEqual(correctGames, games)) {
      setGames(correctGames);
    }
  }, [games]);

  useEffect(() => {
    if (localStorage.getItem('idGebruiker') === null) {
      fetchGames();
    }
  }, [localStorage.getItem('idGebruiker')]);

  useEffect(() => {
    localStorage.getItem('idGebruiker') !== null ? fetchGamesData() : setGamesData([]);
  }, []);

  useEffect(() => {
    let idGebruiker = localStorage.getItem('idGebruiker');
  
    if (idGebruiker) {
      const filteredGamesData = gamesData.filter(
        gameData => _.includes(gameData.fkGebruiker, idGebruiker)
      );
      setUserGamesData(filteredGamesData);
      console.log(filteredGamesData);
    }
  }, [gamesData]);

  // Fetch games from API or local server (for development) and set games state
  const fetchGames = async () => {
    let response;
    if (localServer) {
      response = await axios.get('http://localhost/gamebase/gamesApi.php');
      setGames(response.data);  
    }
    else {
      response = [
      {
          "idGame": "1",
          "Naam": "Minecraft",
          "Genre": "Adventure",
          "SubGenres": "Survival, Action adventure, Sandbox",
          "Prijs": "26.95",
          "Beoordeling": "93",
          "PublicatieDatum": "2011-11-18 00:00:00",
          "Online": "1",
          "Story": "1",
          "Platforms": "PC Playstation Xbox Mobile VR",
          "Developer": "Mojang Studios",
          "Publisher": "Microsoft Corporation",
          "Link": "https://www.minecraft.net/",
          "CoverLink": "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
          "fkGebruiker": null
      },
      {
          "idGame": "2",
          "Naam": "CS:GO",
          "Genre": "Shooter",
          "SubGenres": "Action, Tactical shooter",
          "Prijs": "0",
          "Beoordeling": "83",
          "PublicatieDatum": "2012-08-21 00:00:00",
          "Online": "1",
          "Story": "0",
          "Platforms": "PC Playstation Xbox",
          "Developer": "Valve",
          "Publisher": "Valve",
          "Link": "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
          "CoverLink": "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
          "fkGebruiker": null
      },
      {
          "idGame": "3",
          "Naam": "GTA V",
          "Genre": "Adventure",
          "SubGenres": "Shooter, Action, Comedy, Open world",
          "Prijs": "29.99",
          "Beoordeling": "96",
          "PublicatieDatum": "2013-09-17 00:00:00",
          "Online": "1",
          "Story": "1",
          "Platforms": "PC Playstation Xbox",
          "Developer": "Rockstar Games",
          "Publisher": "Take-Two Interactive",
          "Link": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
          "CoverLink": "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg",
          "fkGebruiker": null
      },
      {
          "idGame": "4",
          "Naam": "Dota 2",
          "Genre": "MOBA",
          "SubGenres": "Strategy, Action, Fantasy",
          "Prijs": "0",
          "Beoordeling": "90",
          "PublicatieDatum": "2013-07-09 00:00:00",
          "Online": "1",
          "Story": "0",
          "Platforms": "PC",
          "Developer": "Valve",
          "Publisher": "Valve",
          "Link": "https://store.steampowered.com/app/570/Dota_2/",
          "CoverLink": "https://www.futuregamereleases.com/wp-content/uploads/2017/08/Dota-2-New-Twitch-Cover.jpg",
          "fkGebruiker": null
      },
      {
          "idGame": "5",
          "Naam": "PUBG: BATTLEGROUNDS",
          "Genre": "Action",
          "SubGenres": "Battle royale, Shooter",
          "Prijs": "0",
          "Beoordeling": "86",
          "PublicatieDatum": "2017-03-23 00:00:00",
          "Online": "1",
          "Story": "0",
          "Platforms": "PC Playstation Xbox Mobile",
          "Developer": "PUBG Corporation",
          "Publisher": "Bluehole, Inc.",
          "Link": "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
          "CoverLink": "https://impdb.org/images/a/a9/PUBG_Cover.jpg",
          "fkGebruiker": null
      },
      {
          "idGame": "6",
          "Naam": "Fortnite",
          "Genre": "Shooter",
          "SubGenres": "Battle royale, Action, Sandbox",
          "Prijs": "0",
          "Beoordeling": "81",
          "PublicatieDatum": "2017-06-25 00:00:00",
          "Online": "1",
          "Story": "1",
          "Platforms": "PC Playstation Xbox Mobile",
          "Developer": "Epic Games",
          "Publisher": "Epic Games",
          "Link": "https://www.fortnite.com/",
          "CoverLink": "https://www.gamevideos.nl/storage/1491/fortnite.jpg",
          "fkGebruiker": null
      },
      {
          "idGame": "7",
          "Naam": "Apex Legends",
          "Genre": "Shooter",
          "SubGenres": "Action, Battle royale",
          "Prijs": "0",
          "Beoordeling": "88",
          "PublicatieDatum": "2019-02-04 00:00:00",
          "Online": "1",
          "Story": "0",
          "Platforms": "PC Playstation Xbox Mobile",
          "Developer": "Respawn Entertainment",
          "Publisher": "Electronic Arts",
          "Link": "https://store.steampowered.com/app/1172470/Apex_Legends/",
          "CoverLink": "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
          "fkGebruiker": null
      }
      ]
      setGames(response);
    }
  };

  // Fetch gamesData from API and set gamesData state
  const fetchGamesData = async () => {
    let response = await axios.get('http://localhost/gamebase/gamesDataApi.php');
    setGamesData(response.data);
  };


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handlePaidGames = (event) => {
    setPaidGames(event.target.checked);
  };

  const handleFreeGames = (event) => {
    setFreeGames(event.target.checked);
  };

  // filter unfiltered games based on search term
  const filteredGames = _.isArray(games)
  ? _.filter(games, (game) =>
      _.includes(_.toLower(game.Naam), _.toLower(searchTerm))
    )
  : [];

  // Sort filtered games based on sort order
  let sortedGames = _.orderBy(filteredGames, [sortBy], [sortOrder]);
  sortedGames = paidGames ? sortedGames : _.filter(sortedGames, (game) => game.Prijs === '0');
  sortedGames = freeGames ? sortedGames : _.filter(sortedGames, (game) => game.Prijs !== '0');

  
  return (
    <div className='flex flex-col relative'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
        <div className='flex justify-end m-2'>
          <p className='hidden md:block font-semibold font-display text-slate-200'>Search:</p>
        </div>
        <input className='bg-slate-800 text-white rounded-3xl h-8 p-3 border border-slate-600 drop-shadow-lg focus:bg-slate-700 focus:outline-none focus:border-blue-500 transition' type="text" placeholder='\games\...' onChange={handleSearch} />
        <div className='flex m-2'>
          <span className='material-symbols-rounded hidden md:block text-slate-200'>search</span>
        </div>
      </div>
      <div>
        <div className='flex items-center mt-2 flex-wrap'>
          <p className='font-medium font-display'>Sort by </p>
          <select onChange={handleSortBy} className='bg-slate-800 rounded-lg h-7 px-2 ml-2 border border-slate-600 drop-shadow-lg'>
            <option value="Naam">Title</option>
            <option value="Beoordeling">Rating</option>
            <option value="PublicatieDatum">Publishing date</option>
          </select>
          <p className='font-medium font-display ml-4'>Order by </p>
          <select onChange={handleSort} className='bg-slate-800 rounded-lg h-7 px-2 ml-2 border border-slate-600 drop-shadow-lg'>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <p className='font-medium font-display ml-4 text-sm'>Paid games </p>
          <input type="checkbox" className='ml-2' onChange={handlePaidGames} defaultChecked='true'/>
          <p className='font-medium font-display ml-4 text-sm'>Free games </p>
          <input type="checkbox" className='ml-2' onChange={handleFreeGames} defaultChecked='true'/>
        </div>
      </div>
      {searchTerm === '' ? 
      <div>
      <p className='text-2xl font-semibold border-b-2 border-slate-600 py-2 font-display mt-2'>
        <span className="material-symbols-rounded text-3xl mr-0.5 align-middle pb-1 text-red-500">local_fire_department</span>
        <span className='align-middle'>Popular on Gamebase</span>
      </p>
        <PopularGrid games={games}/>
        <p className='text-2xl font-semibold border-b-2 border-slate-600 py-2 font-display mt-3'>
          <span className="material-symbols-rounded text-3xl mr-1.5 align-middle pb-1 text-red-500">collections_bookmark</span>
          <span className='align-middle'>Gamebase Library</span>
          </p>
      </div>
        : <div>
        <p className='text-2xl font-semibold border-b-2 border-slate-600 py-2 font-display mt-2'>
          <span className="material-symbols-rounded text-3xl mr-1 align-middle pb-1 text-red-500">manage_search</span>
          <span className='align-middle'>
            Search results for: 
                    {filteredGames.length !== 0 ?
            <span className='text-slate-400 font-normal border-b border-green-500 ml-2'>{searchTerm}</span>
            : <span className='text-slate-400 font-normal border-b border-red-500 ml-2'>{searchTerm}</span>
                    }
          </span>
        </p>
        </div>
      }
        <div className='flex justify-center'>
          {localStorage.getItem('idGebruiker') === null ?
          <Link to="/login">
          <div className="mt-4 px-4 py-2 bg-slate-700 bg-opacity-50 hover:bg-opacity-80 hover:-translate-y-px transition rounded-xl shadow-sm text-slate-300">
            <span className="material-symbols-rounded align-middle mr-1.5 text-slate-400">add_circle</span>
            <span className='align-middle'>Log in to add games</span>
          </div>
        </Link>
          :
          <Link to="/addcustomgame">
            <div className="mt-4 px-4 py-2 bg-slate-700 bg-opacity-50 hover:bg-opacity-80 hover:-translate-y-px transition rounded-xl shadow-sm text-slate-300">
              <span className="material-symbols-rounded align-middle mr-1.5 text-slate-400">add_circle</span>
              <span className='align-middle'>Add custom game</span>
            </div>
          </Link>
          }
        </div>
        <GameGrid games={sortedGames} userData={userGamesData}/>
    </div>
  );
}

export default Home