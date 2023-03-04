const GameItem = ({
    game}) => {


	return (
        <li key={game.idGame}>
            <h2>{game.Naam}</h2>
            <p>{game.Prijs}</p>
          </li>
	);
};

export default GameItem;