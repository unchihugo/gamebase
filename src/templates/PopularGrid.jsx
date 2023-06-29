import PopularItem from "./PopularItem";
import _ from "lodash";
import "./css/GameItem.css";

const PopularGrid = () => {

  return (
    <div className="overflow-visible bg-slate-800 mt-4 br-1 rounded-2xl border border-slate-600">
      <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-6 align-middle justify-items-center">
        <div className="col-span-2 2xl:col-span-3 flex items-center m-2 xl:mr-0 max-h-96">
          <PopularItem
            rank="Most popular"
            title="Counter Strike 2"
            developer="Valve"
            image="https://m.economictimes.com/thumb/msid-98924369,width-1200,height-657,resizemode-4,imgsize-49238/counter-strike-2-release-date-and-all-you-may-want-to-know.jpg"
          />
        </div>
        <div className="hidden 2xl:col-span-2 scale-95 xl:block my-2 max-h-96">
          <PopularItem
            rank="2nd most popular"
            title="PUBG"
            developer="KRAFTON, Inc."
            image="https://cdn.techjuice.pk/wp-content/uploads/2019/01/pubg-xbox-one-pc-release.jpg"
          />
        </div>
        <div className="hidden 2xl:col-span-1 2xl:block mr-2 scale-90 my-2 max-h-96">
        <PopularItem
            rank="3rd most popular"
            title="Dota 2"
            developer="Valve"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/library_600x900_2x.jpg?t=1678135902"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularGrid;
