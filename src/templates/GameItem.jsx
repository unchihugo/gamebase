import "./css/GameItem.css"

const GameItem = ({
    game}) => {


	return (
        <div className='gameitem-card bg-slate-700 shadow-2xl'>
            <img src={game.CoverLink} alt={game.naam} className="aspect-square gameitem-image"/>
            <div key={game.idGame} className='gameitem-content backdrop-blur-md'>
                <p className='font-bold text-lg text-slate-300'>{game.Naam}</p>
                <p className='italic text-slate-400'>
                    {game.Prijs === "0" ? "Free" : "$" + game.Prijs}
                    </p>
            </div>
        </div>
	);
};

export default GameItem;