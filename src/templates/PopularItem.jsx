const PopularItem = ({ title, developer, image, rank }) => {
  return (
    <div className="flex justify-center items-center relative h-full rounded-xl shadow-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover shadow-lg w-full h-full"
        />
        <div className="backdrop-blur-md rounded-r-xl p-2 pl-6 pr-12 flex absolute bottom-5 left-0 text-center bg-slate-700 bg-opacity-50">
          <div className="flex flex-col items-start font-display">
            <p className="text-red-500 -ml-0.5">
              <span className="material-symbols-rounded align-middle text-2xl">
                Workspace_Premium
              </span>
              <span className="align-middle font-bold">
                {rank}
              </span>
            </p>
            <span className="text-2xl font-bold align-middle">{title}</span>
            <p className="text-slate-300 italic">{developer}</p>
          </div>
        </div>
    </div>
  );
};

export default PopularItem;
