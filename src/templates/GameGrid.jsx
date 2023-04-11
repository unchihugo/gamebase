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

  return (
    <div className="gamegrid overflow-visible">
      <div className="grid space-x-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gamegrid justify-items-center">
        {games.map((game) => (
          <GameItem key={game.Id} game={game} handleClick={handleClick} />
        ))}
      </div>
      {/* More information window on game click */}
      {isOpen && (
        <div>
          <div className="gameitem-modal bg-slate-800 overflow-y-scroll break-words border border-slate-600">
            <div className="md:grid md:grid-cols-3 lg:grid-cols-5">
              <div className="col-span-1">
                <img
                  src={selectedGame.CoverLink}
                  alt={selectedGame.Naam}
                  className="hidden md:block gameitem-image rounded-lg"
                />
              </div>
              <div className="col-span-4 pb-1 md:pl-3">
                <div className="border-t border-slate-600 pt-1 flex justify-between">
                  <span className="text-4xl font-semibold font-display">{selectedGame.Naam}</span>
                  <button onClick={handleClose} className="flex items-center -m-1 -mt-4">
                    <span>Close</span>
                    <span className="material-symbols-rounded pl-1">close</span>
                  </button>
                </div>
                <div className="flex items-center italic border-b border-slate-600 py-1 font-display">
                  <div className="text-slate-300">
                    {selectedGame.fkGebruiker === null
                      ? "Added by Gamebase"
                      : "Added by you"}
                  </div>
                  <div className="text-slate-400 ml-2 text-sm mt-0.5">
                    GameID: {selectedGame.idGame}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                  <div>
                  <p className="text-green-500 text-xl mt-2 font-semibold">
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
                    <p className="text-slate-300">
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
                    <div className="bg-slate-700 rounded-xl mt-1 p-2 pt-1 justify-center">
                      <div className="flex items-center justify-center">
                        <span className="material-symbols-rounded text-base mr-1">videogame_asset</span>
                        <span className="font-medium">Available platforms</span>
                      </div>
                      <div className="flex items-center mt-1 justify-center">
                        {selectedGame.Platforms.includes("PC") ? (
                          <span className="material-symbols-rounded text-4xl p-1">desktop_windows</span>
                        ) : ("")}
                        {selectedGame.Platforms.includes("Playstation") ? (
                          <span className="p-1"> <img src="https://cdn-icons-png.flaticon.com/512/1/1443.png" className="max-h-9 invert" /> </span>
                        ) : ("")}
                        {selectedGame.Platforms.includes("Xbox") ? (
                          <span className="p-1"> <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/microsoft_xbox_icon_136396.png" className="max-h-9 invert" /> </span>
                        ) : ("")}
                        {selectedGame.Platforms.includes("Mobile") ? (
                          <span className="material-symbols-rounded text-4xl p-1">phone_iphone</span>
                        ) : ("")}
                        {selectedGame.Platforms.includes("VR") ? (
                          <span className="p-1"> <img src="https://static-00.iconduck.com/assets.00/vr-headset-icon-512x377-f1enyn1n.png" className="max-h-7 mt-1 invert" /> </span>
                        ) : ("")}
                      </div>
                      </div>
                    </p>
                  </div>
                </div>
                <a className="text-blue-200 inline-block px-3 pb-0.5 mr-1 border border-slate-500 rounded-full text-sm overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full" href={selectedGame.Link} target="_blank">
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
              <div className="col-span-5 border mt-2 py-2 px-4 border-slate-600 rounded-xl">
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