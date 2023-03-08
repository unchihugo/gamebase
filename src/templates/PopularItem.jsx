const PopularItem = ({ game }) => {
  return (
    <div className='gameitem-card bg-slate-700 shadow-2xl' >
      <img src={game[0].CoverLink} alt={game[0].Naam} className="aspect-square gameitem-image"/>
    </div>
  );
};

export default PopularItem;