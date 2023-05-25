import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [usersData, setUsersData] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get(`http://localhost/gamebase/authApi.php`);
        const users = response.data;
        console.log(users);
        setUsersData(users);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {usersData.map((user) => (
                    <div className="bg-slate-800 p-4 rounded-2xl">
                        <p className="font-display font-medium text-3xl">{user.Naam}</p>
                        <p className="font-display text-lg text-slate-300">@{user.Gebruikersnaam}</p>
                        <p className="mt-2 text-slate-400">{user.Beschrijving}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;