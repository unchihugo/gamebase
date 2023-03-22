import { useState } from 'react';
import GameItem from './GameItem';
import "./css/GameItem.css"
import RatingComponent from '../components/RatingComponent';

const GameGrid = ({ games }) => {
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className='gamegrid overflow-visible'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-items-center'>
        {games.map((game) => (
          <GameItem
            key={game.Id}
            game={game}
            handleClick={handleClick}
          />
        ))}
      </div>
      {isOpen && (
        <div>
          <div className='gameitem-modal bg-slate-800 overflow-y-scroll break-words border border-slate-600'>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-2'>
            <div className='col-span-1'>
                <img src={selectedGame.CoverLink} alt={selectedGame.Naam} className='gameitem-image'/>
            </div>
            <div className='col-span-4 border-b border-slate-600 pb-1'>
                <div className='text-white text-4xl font-semibold border-t border-slate-600 pt-1 font-display'>{selectedGame.Naam}</div>
                <div className='flex items-center italic border-b border-slate-600 py-1 font-display'>
                    <div className='text-white'>{selectedGame.fkGebruiker === null ? "Added by Gamebase" : "Added by you"}</div>
                    <div className='text-slate-400 ml-2 text-sm mt-0.5'>GameID: {selectedGame.idGame}</div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <p className='mt-2 text-slate-300'>Developer: {selectedGame.Developer}</p>
                        <p className='text-slate-300'>Publisher: {selectedGame.Publisher}</p>
                        <p>Genre: {selectedGame.Genre}</p>
                        <p>Subgenres: {selectedGame.SubGenres}</p>
                        <p>Release date: {formatDate(selectedGame.PublicatieDatum)}</p>
                    </div>
                    <div>
                        <p className='mt-3'>Multiplayer available: {
                            selectedGame.Online === "1" ? <span className='text-green-500'>Yes</span> : <span className='text-red-500'>No</span>} 
                        </p>
                        <p>Has story: {
                            selectedGame.Story === "1" ? <span className='text-green-500'>Yes</span> : <span className='text-red-500'>No</span>} 
                        </p>
                        <p>Platforms: {selectedGame.Platforms}</p>
                    </div>
                </div>
                <p className='text-green-500 text-xl font-semibold'>Price: {selectedGame.Prijs === "0" ? "Free" : "$" + selectedGame.Prijs}</p>
                <p className='text-yellow-500 text-lg font-semibold'>Metacritic rating: {selectedGame.Beoordeling}/100 <RatingComponent ratingStarsCount={10} defaultRating={selectedGame.Beoordeling/10} /></p>
                <p className='text-blue-200'>Link: <a className='italic text-blue-400' href={selectedGame.Link}>{selectedGame.Link}</a></p>
                <p className='text-sm text-blue-200 opacity-60'>Cover image: <a className='italic text-blue-400' href={selectedGame.CoverLink}>{selectedGame.CoverLink}</a></p>
            </div>
            <div className='col-span-5'>
                <p className='font-semibold text-xl font-display'>Your stats</p>
                {localStorage.getItem("idGebruiker") === null ? <p className='text-red-500 italic'>You need to be logged in to Gamebase to see your stats!</p> 
                :
                <div/>}
            </div>
            </div>
            <button onClick={handleClose} className='text-white'>Close</button>
          </div>
          <div className={`gameitem-modal-backdrop ${isBackdropVisible ? 'backdrop-visible' : ''}`}
            onClick={handleClose}></div>
        </div>
      )}
    </div>
  );
};

export default GameGrid;
