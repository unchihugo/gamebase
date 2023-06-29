import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import "../index.css";
import GameGrid from "../templates/GameGrid";

const Library = () => {
    const [games, setGames] = useState([]);
    const [gamesData, setGamesData] = useState([]);
    const [userGamesData, setUserGamesData] = useState([]);
    const localServer = false;

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
            correctGames = _.filter(
                games,
                (game) => game.fkGebruiker === idGebruiker || game.fkGebruiker === null
            );
        } else {
            correctGames = _.filter(games, (game) => game.fkGebruiker === null);
        }

        if (!_.isEqual(correctGames, games)) {
            setGames(correctGames);
        }
    }, [games]);

    useEffect(() => {
        if (localStorage.getItem("idGebruiker") === null) {
            fetchGames();
        }
    }, [localStorage.getItem("idGebruiker")]);

    useEffect(() => {
        localStorage.getItem("idGebruiker") !== null
            ? fetchGamesData()
            : setGamesData([]);
    }, []);

    useEffect(() => {
        let idGebruiker = localStorage.getItem("idGebruiker");

        if (idGebruiker) {
            const filteredGamesData = gamesData.filter((gameData) =>
                _.includes(gameData.fkGebruiker, idGebruiker)
            );
            setUserGamesData(filteredGamesData);
            console.log(filteredGamesData);
        }
    }, [gamesData]);

    // Fetch games from API or local server (for development) and set games state
    const fetchGames = async () => {
        let response;
        if (localServer) {
            response = await axios.get("http://localhost/gamebase/gamesApi.php");
            setGames(response.data);
        } else {
            response = [
                {
                    idGame: "1",
                    Naam: "Minecraft",
                    Genre: "Adventure",
                    SubGenres: "Survival, Action adventure, Sandbox",
                    Prijs: "26.95",
                    Beoordeling: "93",
                    PublicatieDatum: "2011-11-18 00:00:00",
                    Online: "1",
                    Story: "1",
                    Platforms: "PC Playstation Xbox Mobile VR",
                    Developer: "Mojang Studios",
                    Publisher: "Microsoft Corporation",
                    Link: "https://www.minecraft.net/",
                    CoverLink:
                        "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
                    fkGebruiker: null,
                },
                {
                    idGame: "2",
                    Naam: "CS:GO",
                    Genre: "Shooter",
                    SubGenres: "Action, Tactical shooter",
                    Prijs: "0",
                    Beoordeling: "83",
                    PublicatieDatum: "2012-08-21 00:00:00",
                    Online: "1",
                    Story: "0",
                    Platforms: "PC Playstation Xbox",
                    Developer: "Valve",
                    Publisher: "Valve",
                    Link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
                    CoverLink:
                        "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
                    fkGebruiker: null,
                },
                {
                    idGame: "3",
                    Naam: "GTA V",
                    Genre: "Adventure",
                    SubGenres: "Shooter, Action, Comedy, Open world",
                    Prijs: "29.99",
                    Beoordeling: "96",
                    PublicatieDatum: "2013-09-17 00:00:00",
                    Online: "1",
                    Story: "1",
                    Platforms: "PC Playstation Xbox",
                    Developer: "Rockstar Games",
                    Publisher: "Take-Two Interactive",
                    Link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
                    CoverLink:
                        "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg",
                    fkGebruiker: null,
                },
                {
                    idGame: "4",
                    Naam: "Dota 2",
                    Genre: "MOBA",
                    SubGenres: "Strategy, Action, Fantasy",
                    Prijs: "0",
                    Beoordeling: "90",
                    PublicatieDatum: "2013-07-09 00:00:00",
                    Online: "1",
                    Story: "0",
                    Platforms: "PC",
                    Developer: "Valve",
                    Publisher: "Valve",
                    Link: "https://store.steampowered.com/app/570/Dota_2/",
                    CoverLink:
                        "https://www.futuregamereleases.com/wp-content/uploads/2017/08/Dota-2-New-Twitch-Cover.jpg",
                    fkGebruiker: null,
                },
                {
                    idGame: "5",
                    Naam: "PUBG: BATTLEGROUNDS",
                    Genre: "Action",
                    SubGenres: "Battle royale, Shooter",
                    Prijs: "0",
                    Beoordeling: "86",
                    PublicatieDatum: "2017-03-23 00:00:00",
                    Online: "1",
                    Story: "0",
                    Platforms: "PC Playstation Xbox Mobile",
                    Developer: "PUBG Corporation",
                    Publisher: "Bluehole, Inc.",
                    Link: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
                    CoverLink: "https://impdb.org/images/a/a9/PUBG_Cover.jpg",
                    fkGebruiker: null,
                },
                {
                    idGame: "6",
                    Naam: "Fortnite",
                    Genre: "Shooter",
                    SubGenres: "Battle royale, Action, Sandbox",
                    Prijs: "0",
                    Beoordeling: "81",
                    PublicatieDatum: "2017-06-25 00:00:00",
                    Online: "1",
                    Story: "1",
                    Platforms: "PC Playstation Xbox Mobile",
                    Developer: "Epic Games",
                    Publisher: "Epic Games",
                    Link: "https://www.fortnite.com/",
                    CoverLink: "https://www.gamevideos.nl/storage/1491/fortnite.jpg",
                    fkGebruiker: null,
                },
                {
                    idGame: "7",
                    Naam: "Apex Legends",
                    Genre: "Shooter",
                    SubGenres: "Action, Battle royale",
                    Prijs: "0",
                    Beoordeling: "88",
                    PublicatieDatum: "2019-02-04 00:00:00",
                    Online: "1",
                    Story: "0",
                    Platforms: "PC Playstation Xbox Mobile",
                    Developer: "Respawn Entertainment",
                    Publisher: "Electronic Arts",
                    Link: "https://store.steampowered.com/app/1172470/Apex_Legends/",
                    CoverLink:
                        "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
                    fkGebruiker: null,
                },
            ];
            setGames(response);
        }
    };

    // Fetch gamesData from API and set gamesData state
    const fetchGamesData = async () => {
        let response = await axios.get(
            "http://localhost/gamebase/gamesDataApi.php"
        );
        setGamesData(response.data);
    };

    let sortedGames = _.filter(
        games,
        (game) => game.fkGebruiker === localStorage.getItem("idGebruiker")
    );

    return (
        <div>
            {localStorage.getItem("idGebruiker") === null ? (
                <div>
                    <Link to="/login">
                        <div className="mt-4 px-4 py-2 bg-slate-700 bg-opacity-50 hover:bg-opacity-80 hover:-translate-y-px transition rounded-xl shadow-sm text-slate-300">
                            <span className="material-symbols-rounded align-middle mr-1.5 text-slate-400">
                                add_circle
                            </span>
                            <span className="align-middle">
                                Log in to create your Library and add games!
                            </span>
                        </div>
                    </Link>
                </div>
            ) : (
                <div>
                    <span className="text-2xl font-semibold py-2 font-display mt-2">{localStorage.getItem('Naam')}'s Library</span>
                    <Link to="/addcustomgame">
                        <div className="mt-4 px-4 py-2 bg-slate-700 bg-opacity-50 hover:bg-opacity-80 hover:-translate-y-px transition rounded-xl shadow-sm text-slate-300">
                            <span className="material-symbols-rounded align-middle mr-1.5 text-slate-400">add_circle</span>
                            <span className='align-middle'>Add custom game to Gamebase account</span>
                        </div>
                    </Link>
                    <GameGrid games={sortedGames} userData={userGamesData} />
                </div>
            )}
        </div>
    );
};

export default Library;
