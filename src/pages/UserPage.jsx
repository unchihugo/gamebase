import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const UserPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState({});
    const [editingDescription, setEditingDescription] = useState(false);
    const [newDescription, setNewDescription] = useState();


    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (userData) {
            setNewDescription(userData.Beschrijving);
        }
      }, [userData]);

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

    const handleDescription = async (event) => {
        const fkUser = localStorage.getItem('idGebruiker');

        try {
            const response = await axios.post("http://localhost:3001/description", {
                fkUser,
                description: newDescription
            });

            if (response.status === 200) {
                window.location.reload();
                console.log("success");
            }
        } catch (error) {
            alert("Something went wrong")
        }
    };

    const handleEditDescription = () => {
        setEditingDescription(true);
    };

    const handleApplyDescription = () => {
        handleDescription();
        setEditingDescription(false);
    };

    return (
        <div>
            {!userData ?
                (
                    <div className="flex-1 container pt-4 mx-auto">
                    <div className="mx-4 px-4 py-8 bg-slate-800 rounded-2xl border border-slate-500">
                        <div className="flex justify-center items-center">
                            <span className="material-symbols-rounded text-6xl lg:text-7xl pb-2 text-slate-400">person_off</span>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-center mb-2 font-display">
                            User does not exist
                        </h2>
                        <p className="text-md lg:text-lg text-center text-slate-400 font-display">
                            Search for all <Link to={"/users"} className="text-blue-500 underline">users</Link>
                        </p>
                    </div>
                </div>
                )
                :
                (<div>
                    <div className="bg-slate-800 p-4 rounded-2xl">
                        <p className="font-display font-medium text-3xl">{userData.Naam}</p>
                        <p className="font-display text-lg text-slate-300">@{userData.Gebruikersnaam}</p>
                        <div className="flex mt-2">
                            {userData.idGebruiker === localStorage.getItem('idGebruiker') &&
                                <span className='material-symbols-rounded text-xl mr-0.5 align-middle text-slate-400 cursor-pointer'
                                    onClick={handleEditDescription}>edit</span>
                            }
                            {editingDescription ? (
                                <>
                                    <input
                                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                                        type="text"
                                        value={newDescription}
                                        onChange={(event) => setNewDescription(event.target.value)}
                                    />
                                    <button
                                        className="ml-2 bg-slate-400 text-slate-900 px-3 py-1 rounded"
                                        onClick={handleApplyDescription}
                                    >
                                        Apply
                                    </button>
                                </>
                            ) : (
                                <span className="align-middle text-slate-400">Description: {userData.Beschrijving}</span>
                            )}
                        </div>
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