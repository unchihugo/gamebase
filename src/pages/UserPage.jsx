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
        { !userData ? 
            (
            <h1>User not found</h1>
            )
        :
        (<div>
            <div>
            <p className="font-display font-medium text-3xl">{userData.Naam}</p>
            <p className="font-display text-lg text-slate-300">@{userData.Gebruikersnaam}</p>
            <p className="mt-2 text-slate-400">{userData.Beschrijving}</p>
            </div>
            <div>
            <div className="flex items-center mt-4">
            <label className="block tracking-wide mr-2" htmlFor="name">
        Steam
    </label>
    <input
        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
        type="text"
        name="steam"
        id="steam"
        value={userData.SteamLink}
        // onChange={(event) => setSteam(event.target.value)}
        required
    />
                </div>
             </div>
        </div>
        )}
        </div>
    );
  };

export default UserPage;