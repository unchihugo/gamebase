const GameItem = ({ game, handleClick }) => {

  return (
    <>
    <div className='gameitem-card bg-slate-700 shadow-2xl' onClick={() => handleClick(game)} >
      <img src={game.CoverLink} alt={game.naam} className="aspect-square gameitem-image"/>
      <div key={game.idGame} className='gameitem-content backdrop-blur-md'>
        <p className='font-medium text-lg text-slate-300 font-display'>{game.Naam}</p>
        <p className='italic text-slate-400'>
          {game.Prijs === "0" ? "Free" : "$" + game.Prijs}
        </p>
        <p className='text-red-500'>More info{">"}</p>
      </div>
    </div>
    </>
  );
};

export default GameItem;