import _ from "lodash";

const GameItem = ({ game, userData, handleClick }) => {

  return (
    <>
    <div className='gameitem-card bg-slate-700 shadow-2xl' onClick={() => handleClick(game)} >
      <img src={game.CoverLink} alt={game.naam} className="aspect-square gameitem-image"/>
      <div className="gameitem-rating backdrop-blur-md rounded-xl p-0.5 px-1.5 flex m-1">
        <p className="text-yellow-400 mb-1">★</p>
        <p className="ml-1 text-yellow-400 font-display font-medium text-sm">{game.Beoordeling/10}</p>
      </div>
      <div className="gameitem-status backdrop-blur-md rounded-b-xl p-0.5 px-1.5 flex m-1 mt-0">
        {localStorage.getItem("idGebruiker") === null ? ( <div></div>
        ) : (
          (() => {
            let matchingData = _.find(userData, {
              fkGame: game.idGame,
            });
            if (matchingData !== undefined) {
              if (matchingData.Status === "0"){
                return (  
                  <span className='material-symbols-rounded hidden md:block text-red-500 text-2xl pl-0.5 py-1'>bookmark</span>
                );
              } else if (matchingData.Status === "1") {
                return (
                  <span className='material-symbols-rounded hidden md:block text-red-500'>shopping_basket</span>
                );
              } else if (matchingData.Status === "2") {
                return (
                  <span className='material-symbols-rounded hidden md:block text-red-500'>done</span>
                );
              }
            }
            })()
        )
        
        }
      </div>
      <div key={game.idGame} className='gameitem-content sm:backdrop-blur-md'>
        <p className='font-medium sm:text-lg text-slate-300 font-display'>{game.Naam}</p>
        <p className='italic text-slate-400'>
          {game.Prijs === "0" ? "Free" : "$" + game.Prijs}
        </p>
        <p className='text-red-500'>More info {">"}</p>
      </div>
    </div>
    </>
  );
};

export default GameItem;