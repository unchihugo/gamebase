import PopularItem from './PopularItem';
import _ from 'lodash';
import "./css/GameItem.css"

const PopularGrid = ({ games }) => {

  games = [
    {
        "idGame": "1",
        "Naam": "Minecraft",
        "Genre": "Adventure",
        "SubGenres": "Survival, Action adventure, Sandbox",
        "Prijs": "26.95",
        "Beoordeling": "93",
        "PublicatieDatum": "2011-11-18 00:00:00",
        "Online": "1",
        "Story": "1",
        "Platforms": "PC Playstation Xbox Mobile VR",
        "Developer": "Mojang Studios",
        "Publisher": "Microsoft Corporation",
        "Link": "https://www.minecraft.net/",
        "CoverLink": "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
        "fkGebruiker": null
    },
    {
        "idGame": "2",
        "Naam": "CS:GO",
        "Genre": "Shooter",
        "SubGenres": "Action, Tactical shooter",
        "Prijs": "0",
        "Beoordeling": "83",
        "PublicatieDatum": "2012-08-21 00:00:00",
        "Online": "1",
        "Story": "0",
        "Platforms": "PC Playstation Xbox",
        "Developer": "Valve",
        "Publisher": "Valve",
        "Link": "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
        "CoverLink": "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
        "fkGebruiker": null
    },
    {
        "idGame": "3",
        "Naam": "GTA V",
        "Genre": "Adventure",
        "SubGenres": "Shooter, Action, Comedy, Open world",
        "Prijs": "29.99",
        "Beoordeling": "96",
        "PublicatieDatum": "2013-09-17 00:00:00",
        "Online": "1",
        "Story": "1",
        "Platforms": "PC Playstation Xbox",
        "Developer": "Rockstar Games",
        "Publisher": "Take-Two Interactive",
        "Link": "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
        "CoverLink": "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg",
        "fkGebruiker": null
    },
    {
        "idGame": "4",
        "Naam": "Dota 2",
        "Genre": "MOBA",
        "SubGenres": "Strategy, Action, Fantasy",
        "Prijs": "0",
        "Beoordeling": "90",
        "PublicatieDatum": "2013-07-09 00:00:00",
        "Online": "1",
        "Story": "0",
        "Platforms": "PC",
        "Developer": "Valve",
        "Publisher": "Valve",
        "Link": "https://store.steampowered.com/app/570/Dota_2/",
        "CoverLink": "https://www.futuregamereleases.com/wp-content/uploads/2017/08/Dota-2-New-Twitch-Cover.jpg",
        "fkGebruiker": null
    },
    {
        "idGame": "5",
        "Naam": "PUBG: BATTLEGROUNDS",
        "Genre": "Action",
        "SubGenres": "Battle royale, Shooter",
        "Prijs": "0",
        "Beoordeling": "86",
        "PublicatieDatum": "2017-03-23 00:00:00",
        "Online": "1",
        "Story": "0",
        "Platforms": "PC Playstation Xbox Mobile",
        "Developer": "PUBG Corporation",
        "Publisher": "Bluehole, Inc.",
        "Link": "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
        "CoverLink": "https://impdb.org/images/a/a9/PUBG_Cover.jpg",
        "fkGebruiker": null
    },
    {
        "idGame": "6",
        "Naam": "Fortnite",
        "Genre": "Shooter",
        "SubGenres": "Battle royale, Action, Sandbox",
        "Prijs": "0",
        "Beoordeling": "81",
        "PublicatieDatum": "2017-06-25 00:00:00",
        "Online": "1",
        "Story": "1",
        "Platforms": "PC Playstation Xbox Mobile",
        "Developer": "Epic Games",
        "Publisher": "Epic Games",
        "Link": "https://www.fortnite.com/",
        "CoverLink": "https://www.gamevideos.nl/storage/1491/fortnite.jpg",
        "fkGebruiker": null
    },
    {
        "idGame": "7",
        "Naam": "Apex Legends",
        "Genre": "Shooter",
        "SubGenres": "Action, Battle royale",
        "Prijs": "0",
        "Beoordeling": "88",
        "PublicatieDatum": "2019-02-04 00:00:00",
        "Online": "1",
        "Story": "0",
        "Platforms": "PC Playstation Xbox Mobile",
        "Developer": "Respawn Entertainment",
        "Publisher": "Electronic Arts",
        "Link": "https://store.steampowered.com/app/1172470/Apex_Legends/",
        "CoverLink": "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
        "fkGebruiker": null
    }
    ]

  return (
    <div className=' overflow-visible bg-slate-800 mt-4 br-1 rounded-2xl border border-slate-600'>
      <div className='grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center'>
        <div className='col-span-2 flex justify-center items-center m-2 2xl:ml-4 relative'>
          <img src="https://m.economictimes.com/thumb/msid-98924369,width-1200,height-657,resizemode-4,imgsize-49238/counter-strike-2-release-date-and-all-you-may-want-to-know.jpg" alt="CS2" className='object-cover rounded-xl shadow-lg'/>
          <div className='backdrop-blur-md rounded-r-xl p-2 pl-6 pr-20 flex absolute bottom-10 left-0 text-center bg-slate-700 bg-opacity-50'>
            <div className='flex flex-col items-start font-display'>
              <p className='text-yellow-500'> 
                <span className='material-symbols-rounded align-middle text-xl'>Workspace_Premium</span> 
                <span className='align-middle ml-0.5 font-medium'>Most popular</span>
              </p>
              <span className='text-2xl font-bold align-middle'>Counter Strike 2</span>
              <p className='text-slate-300 italic'>Valve</p>
            </div>
          </div>
          </div>
          <div className='hidden scale-95 xl:block'>
          <p className='text-lg text-gray-200 font-regular font-display'>2nd</p>
          <PopularItem 
            game={_.filter(games, ["Naam", "Minecraft"])}
            />
            </div>
            <div className='hidden scale-90 2xl:block'>
            <p className='text-lg text-yellow-600 font-regular font-display'>3rd</p>
          <PopularItem 
            game={_.filter(games, ["Naam", "GTA V"])}
            />
            </div>
      </div>
    </div>
  );
};

export default PopularGrid;
