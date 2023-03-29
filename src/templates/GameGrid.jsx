import { useState } from "react";
import GameItem from "./GameItem";
import "./css/GameItem.css";
import _ from "lodash";
import RatingComponent from "../components/RatingComponent";
import axios from "axios";

const GameGrid = ({ games, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState({});
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const handleClick = (game) => {
    setIsOpen(true);
    setSelectedGame(game);
    setIsBackdropVisible(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedGame({});
    setIsBackdropVisible(false);
  };

  // Format date to dd/mm/yyyy format and remove time
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  function postGame(_name, _genre, _subgenres, _price, _rating, _releaseDate, _online, _story, _platforms, _developer, _publisher, _link, _coverLink, _fkGebruiker){
    axios.post('/addGame', {
      name: _name,
      genre: _genre,
      subgenres: _subgenres,
      price: _price,
      rating: _rating,
      releaseDate: _releaseDate,
      online: _online,
      story: _story,
      platforms: _platforms,
      developer: _developer,
      publisher: _publisher,
      link: _link,
      coverLink: _coverLink,
      fkGebruiker: _fkGebruiker
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="gamegrid overflow-visible">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-items-center">
        {games.map((game) => (
          <GameItem key={game.Id} game={game} handleClick={handleClick} />
        ))}
      </div>
      {/* More information window on game click */}
      {isOpen && (
        <div>
          <div className="gameitem-modal bg-slate-800 overflow-y-scroll break-words border border-slate-600">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
              <div className="col-span-1">
                <img
                  src={selectedGame.CoverLink}
                  alt={selectedGame.Naam}
                  className="gameitem-image rounded-lg"
                />
              </div>
              <div className="col-span-4 pb-1 pl-1">
                <div className="text-white text-4xl font-semibold border-t border-slate-600 pt-1 font-display">
                  {selectedGame.Naam}
                </div>
                <div className="flex items-center italic border-b border-slate-600 py-1 font-display">
                  <div className="text-white">
                    {selectedGame.fkGebruiker === null
                      ? "Added by Gamebase"
                      : "Added by you"}
                  </div>
                  <div className="text-slate-400 ml-2 text-sm mt-0.5">
                    GameID: {selectedGame.idGame}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="mt-1 text-slate-300">
                      <span className="material-symbols-rounded text-base mr-1 align-middle">code</span>
                      <span className="align-middle">Developer: {selectedGame.Developer}</span>
                    </p>
                    <p className="text-slate-300">
                      <span className="material-symbols-rounded text-base mr-1 align-middle">apartment</span>
                      <span className="align-middle">Publisher: {selectedGame.Publisher}</span>
                    </p>  
                    <p>Genre: {selectedGame.Genre}</p>
                    <p>Subgenres: {selectedGame.SubGenres}</p>
                    <p>
                      Release date: {formatDate(selectedGame.PublicatieDatum)}
                    </p>
                  </div>
                  <div>
                    <p className="mt-1">
                      <span className="material-symbols-rounded text-base mr-1 align-middle">public</span>
                      <span className="align-middle">
                        Multiplayer available:{" "}
                        {selectedGame.Online === "1" ? (
                          <span className="text-green-500">Yes</span>
                        ) : (
                          <span className="text-red-500">No</span>
                        )}
                      </span>
                    </p>
                    <p>
                    <span className="material-symbols-rounded text-base mr-1 align-middle">history_edu</span>
                      <span className="align-middle">
                        Has story:{" "}
                        {selectedGame.Story === "1" ? (
                          <span className="text-green-500">Yes</span>
                        ) : (
                          <span className="text-red-500">No</span>
                        )}
                      </span>
                    </p>
                    <p>
                      <span className="material-symbols-rounded text-base mr-1 align-middle">videogame_asset</span>
                      <span className="align-middle">Platforms: {selectedGame.Platforms}</span>
                    </p>
                  </div>
                </div>
                <p className="text-green-500 text-xl font-semibold">
                  <span className="mr-1.5">
                    Price:{" "}
                    {selectedGame.Prijs === "0"
                      ? "Free"
                      : "$" + selectedGame.Prijs}
                  </span>
                  <span className="material-symbols-rounded text-2xl align-middle">sell</span>
                </p>
                <p className="text-yellow-400 text-lg font-semibold mb-1.5">
                  Metacritic rating: {selectedGame.Beoordeling / 10}/10{" "}
                  <RatingComponent
                    ratingStarsCount={10}
                    defaultRating={selectedGame.Beoordeling / 10}
                  />
                </p>
                <a className="text-blue-200 inline-block px-3 pb-0.5 border border-slate-500 rounded-full text-sm overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full" href={selectedGame.Link} target="_blank">
                  <span class="material-symbols-rounded mr-0.5 text-base align-middle">link</span>
                  <span className="mr-1 align-middle">Link</span>
                  <span className="italic text-blue-400 align-middle">{selectedGame.Link}</span>
                </a>
                <a className="text-blue-200 inline-block px-3 pb-0.5 border border-slate-500 rounded-full text-sm overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full" href={selectedGame.CoverLink} target="_blank">
                  <span class="material-symbols-rounded mr-0.5 text-base align-middle">link</span>
                  <span className="mr-1 align-middle">Cover image</span>
                  <span className="italic text-blue-400 align-middle">{selectedGame.CoverLink}</span>
                </a>
              </div>
              {/* stats */}
              <div className="col-span-5 border py-2 px-4 border-slate-600 rounded-xl">
                <p className="font-semibold text-xl font-display">Your stats</p>
                {localStorage.getItem("idGebruiker") === null ? (
                  <p className="text-red-500 italic">
                    You need to be logged in to Gamebase to see your stats!
                  </p>
                ) : (
                  (() => {
                    let matchingData = _.find(userData, {
                      fkGame: selectedGame.idGame,
                    });
                    if (matchingData !== undefined) {
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>
                            <p className="text-slate-300 font-display">
                              Added on:{" "}
                              {formatDate(matchingData.DatumToegevoegd)}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-300 font-display">
                              Hours played: {matchingData.AantalUren}
                            </p>
                            <p className="text-slate-300 font-display">
                              Achievements: {matchingData.AantalPrestaties}
                            </p>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <p className="text-red-500 italic">
                          You haven't added this game yet!
                        </p>
                      );
                    }
                  })()
                )}
                <div />
              </div>
            </div>
            <button onClick={handleClose} className="text-white">
              Close
            </button>
          </div>
          <div
            className={`gameitem-modal-backdrop ${
              isBackdropVisible ? "backdrop-visible" : ""
            }`}
            onClick={handleClose}
          ></div>
        </div>
      )}
    </div>
  );
};

export default GameGrid;