import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCustomGame = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [subGenres, setSubGenres] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [releaseDate, setReleaseDate] = useState('');
    const [online, setOnline] = useState(false);
    const [story, setStory] = useState(false);
    const [platforms, setPlatforms] = useState('');
    const [developer, setDeveloper] = useState('');
    const [publisher, setPublisher] = useState('');
    const [link, setLink] = useState('');
    const [coverLink, setCoverLink] = useState('');

    const [PC, setPC] = useState(false);
    const [Playstation, setPlaystation] = useState(false);

    // return user to home if not logged in
    useEffect(() => {
        // if (localStorage.getItem("idGebruiker") === null) {
        //   window.location.href = "./home";
        // }
      }, []);

    // function to use the server.js file to add a game to the database and using id of the user who added it for fkUser
    const handleAddGame = async (event) => {
        event.preventDefault();
        const fkUser = localStorage.getItem("idGebruiker");

        try{        
        const response = await axios.post("http://localhost:3001/games", {
            name,
            genre,
            subGenres,
            price,
            rating,
            releaseDate,
            online,
            story,
            platforms,
            developer,
            publisher,
            link,
            coverLink,
            fkUser
        });

        if (response.status === 200) {
            window.location.href = "./home";
        }
    } catch (error) {
         alert("Something went wrong, ensure that all fields are filled in correctly");
    }
    };

    return(
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mt-4 mb-8 font-display">Add custom game</h1>
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="name">
                        Game Title *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="genre">
                        Genre *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="genre"
                        id="genre"
                        onChange={(event) => setGenre(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="subGenres">
                        Subgenres (separate with commas)
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="subGenres"
                        id="subGenres"
                        onChange={(event) => setSubGenres(event.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="price">
                        Price (free = 0) *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="number"
                        name="price"
                        id="price"
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="rating">
                        Rating out of 100 *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="number"
                        name="rating"
                        id="rating"
                        onChange={(event) => setRating(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="releaseDate">
                        Release date *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="date"
                        name="releaseDate"
                        id="releaseDate"
                        onChange={(event) => setReleaseDate(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="online">
                        Online features?
                    </label>
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="online"
                        id="online"
                        onChange={(event) => setOnline(event.target.checked)}
                    />
                    <span className="text-sm">Yes</span>
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="story">
                        Story available?
                    </label>
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="story"
                        id="story"
                        onChange={(event) => setStory(event.target.checked)}
                    />
                    <span className="text-sm">Yes</span>
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="platforms">
                        Platforms (separate with spaces) *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="platforms"
                        id="platforms"
                        onChange={(event) => setPlatforms(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="developer">
                        Developer *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="developer"
                        id="developer"
                        onChange={(event) => setDeveloper(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="publisher">
                        Publisher *
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="publisher"
                        id="publisher"
                        onChange={(event) => setPublisher(event.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="link">
                        Link to game's website
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="link"
                        id="link"
                        onChange={(event) => setLink(event.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-slate-400 text-xs font-bold mb-2" htmlFor="coverLink">
                        Link to game's cover image (right click an image and select "Copy Image Link")
                    </label>
                    <input
                        className="appearance-none block w-full bg-slate-900 text-slate-400 border border-slate-600 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-800 focus:border-slate-500"
                        type="text"
                        name="coverLink"
                        id="coverLink"
                        onChange={(event) => setCoverLink(event.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="w-full">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleAddGame}
                    >
                        Add game
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default AddCustomGame;