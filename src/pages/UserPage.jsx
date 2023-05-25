import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UserPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get(`http://localhost/gamebase/authApi.php`);
        const user = response.data.find((user) => user.idGebruiker === userId);
        if (user) {
            setUserData(user);
        }
        else {
            setUserData(null);
        }
    };

    return (
        <div>
            {!userData ?
                (
                    <h1>User not found</h1>
                )
                :
                (<div>
                    <div className="bg-slate-800 p-4 rounded-2xl">
                        <p className="font-display font-medium text-3xl">{userData.Naam}</p>
                        <p className="font-display text-lg text-slate-300">@{userData.Gebruikersnaam}</p>
                        <p className="mt-2 text-slate-400">{userData.Beschrijving}</p>
                    </div>
                    <div className="my-3 sm:mx-4 p-3">
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.SteamLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    Steam
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 border-slate-600 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.SteamLink} 
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.EpicGamesLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/ef469da55386b89993b2b644f5ba5140.png" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    Epic&nbsp;Games
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.EpicGamesLink}
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.GOGLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://theme.zdassets.com/theme_assets/987253/b7b364aa822c95e1e2b333ec3fb58d2273084d9c.png" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    GOG
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.GOGLink}
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.OriginLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://techgage.com/wp-content/uploads/2013/10/EA-Origin-Logo.png" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    Origin
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.OriginLink}
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.BattleNetLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://play-lh.googleusercontent.com/PuPFgmLam2WNyul3lUQywQT5Y5sPgL6VzWSUAdXOS1oIQwHYnrB_MyfXCOrR4LzZcjeP" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    Battle.net
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.BattleNetLink}
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.YoutubeLink}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://img.freepik.com/free-icon/youtube_318-566773.jpg" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    YouTube
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.YoutubeLink}
                            </p>
                        </a>
                        <a className="flex items-center mt-2 border rounded-lg border-slate-600 cursor-pointer" 
                        href={userData.DiscordId}>
                            <div className="items-center flex px-3 py-2 pr-2 bg-slate-800 rounded-l-lg border-slate-600 border-r">
                                <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" className="hidden sm:block h-5 mr-2" />
                                <label className="mr-2 cursor-pointer">
                                    Discord
                                </label>
                            </div>
                            <p
                                className="underline block w-full text-blue-500 leading-tight py-2.5 px-2 focus:outline-none focus:bg-slate-800 focus:border-slate-500 overflow-hidden text-ellipsis"
                            > {userData.DiscordId}
                            </p>
                        </a>
                    </div>
                </div>
                )}
        </div>
    );
};

export default UserPage;