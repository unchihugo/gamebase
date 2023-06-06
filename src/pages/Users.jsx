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
            {filteredUsers.length === 0 ? 
                <div className="flex-1 container pt-4 mx-auto">
                    <div className="mx-4 px-4 py-8 bg-slate-800 rounded-2xl border border-slate-500">
                        <div className="flex justify-center items-center">
                            <span className="material-symbols-rounded text-6xl lg:text-7xl pb-2 text-slate-400">search_off</span>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-center mb-2 font-display">
                            No users found
                        </h2>
                        <p className="text-md lg:text-lg text-center text-slate-400 font-display">
                            Try searching for a different name.
                        </p>
                    </div>
                </div>
         : null }
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