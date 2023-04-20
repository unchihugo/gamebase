import PopularItem from "./PopularItem";
import _ from "lodash";
import "./css/GameItem.css";

const PopularGrid = ({ games }) => {
  games = [
    {
      idGame: "1",
      Naam: "Minecraft",
      Genre: "Adventure",
      SubGenres: "Survival, Action adventure, Sandbox",
      Prijs: "26.95",
      Beoordeling: "93",
      PublicatieDatum: "2011-11-18 00:00:00",
      Online: "1",
      Story: "1",
      Platforms: "PC Playstation Xbox Mobile VR",
      Developer: "Mojang Studios",
      Publisher: "Microsoft Corporation",
      Link: "https://www.minecraft.net/",
      CoverLink:
        "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
      fkGebruiker: null,
    },
    {
      idGame: "2",
      Naam: "CS:GO",
      Genre: "Shooter",
      SubGenres: "Action, Tactical shooter",
      Prijs: "0",
      Beoordeling: "83",
      PublicatieDatum: "2012-08-21 00:00:00",
      Online: "1",
      Story: "0",
      Platforms: "PC Playstation Xbox",
      Developer: "Valve",
      Publisher: "Valve",
      Link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
      CoverLink:
        "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
      fkGebruiker: null,
    },
    {
      idGame: "3",
      Naam: "GTA V",
      Genre: "Adventure",
      SubGenres: "Shooter, Action, Comedy, Open world",
      Prijs: "29.99",
      Beoordeling: "96",
      PublicatieDatum: "2013-09-17 00:00:00",
      Online: "1",
      Story: "1",
      Platforms: "PC Playstation Xbox",
      Developer: "Rockstar Games",
      Publisher: "Take-Two Interactive",
      Link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
      CoverLink:
        "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg",
      fkGebruiker: null,
    },
    {
      idGame: "4",
      Naam: "Dota 2",
      Genre: "MOBA",
      SubGenres: "Strategy, Action, Fantasy",
      Prijs: "0",
      Beoordeling: "90",
      PublicatieDatum: "2013-07-09 00:00:00",
      Online: "1",
      Story: "0",
      Platforms: "PC",
      Developer: "Valve",
      Publisher: "Valve",
      Link: "https://store.steampowered.com/app/570/Dota_2/",
      CoverLink:
        "https://www.futuregamereleases.com/wp-content/uploads/2017/08/Dota-2-New-Twitch-Cover.jpg",
      fkGebruiker: null,
    },
    {
      idGame: "5",
      Naam: "PUBG: BATTLEGROUNDS",
      Genre: "Action",
      SubGenres: "Battle royale, Shooter",
      Prijs: "0",
      Beoordeling: "86",
      PublicatieDatum: "2017-03-23 00:00:00",
      Online: "1",
      Story: "0",
      Platforms: "PC Playstation Xbox Mobile",
      Developer: "PUBG Corporation",
      Publisher: "Bluehole, Inc.",
      Link: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
      CoverLink: "https://impdb.org/images/a/a9/PUBG_Cover.jpg",
      fkGebruiker: null,
    },
    {
      idGame: "6",
      Naam: "Fortnite",
      Genre: "Shooter",
      SubGenres: "Battle royale, Action, Sandbox",
      Prijs: "0",
      Beoordeling: "81",
      PublicatieDatum: "2017-06-25 00:00:00",
      Online: "1",
      Story: "1",
      Platforms: "PC Playstation Xbox Mobile",
      Developer: "Epic Games",
      Publisher: "Epic Games",
      Link: "https://www.fortnite.com/",
      CoverLink: "https://www.gamevideos.nl/storage/1491/fortnite.jpg",
      fkGebruiker: null,
    },
    {
      idGame: "7",
      Naam: "Apex Legends",
      Genre: "Shooter",
      SubGenres: "Action, Battle royale",
      Prijs: "0",
      Beoordeling: "88",
      PublicatieDatum: "2019-02-04 00:00:00",
      Online: "1",
      Story: "0",
      Platforms: "PC Playstation Xbox Mobile",
      Developer: "Respawn Entertainment",
      Publisher: "Electronic Arts",
      Link: "https://store.steampowered.com/app/1172470/Apex_Legends/",
      CoverLink:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
      fkGebruiker: null,
    },
  ];

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
            image="https://wdflat.com/wp-content/uploads/All-about-PUBG.jpg"
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
