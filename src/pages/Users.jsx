import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";


const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get(`http://localhost/gamebase/authApi.php`);
        console.log(response.data);
        setUsersData(response.data.reverse());
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = _.isArray(usersData)
        ? _.filter(usersData, (user) =>
            _.includes(_.toLower(user.Naam), _.toLower(searchTerm)) ||
            _.includes(_.toLower(user.Gebruikersnaam), _.toLower(searchTerm))
        )
        : [];

    if (!usersData) return <div>loading...</div>;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <div className='flex justify-end m-2'>
                    <p className='hidden md:block font-semibold font-display text-slate-200'>Search users:</p>
                </div>
                <input className='bg-slate-800 text-white rounded-3xl h-8 p-3 border border-slate-600 drop-shadow-lg focus:bg-slate-700 focus:outline-none focus:border-blue-500 transition' type="text" placeholder='Users...' onChange={handleSearch} />
                <div className='flex m-2'>
                    <span className='material-symbols-rounded hidden md:block text-slate-200'>search</span>
                </div>
            </div>
            <p className='text-2xl font-semibold border-b-2 border-slate-600 py-2 font-display'>
                <span className="material-symbols-rounded text-3xl mr-1.5 align-middle pb-1 text-red-500">group</span>
                <span className='align-middle'>Newest Users</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {filteredUsers.map((user) => (
                    <Link to={`/users/${user.idGebruiker}`} key={user.id}>
                        <div className="bg-slate-800 p-4 rounded-2xl">
                            <p className="font-display font-medium text-3xl">{user.Naam}</p>
                            <p className="font-display text-lg text-slate-300">@{user.Gebruikersnaam}</p>
                            <p className="mt-2 text-slate-400 overflow-hidden">{user.Beschrijving}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Users;