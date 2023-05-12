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
        if (localStorage.getItem("idGebruiker") === null) {
          window.location.href = "./home";
        }
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
      <div>
          <h1>Add custom game</h1>
          <div>
              <span className='text-base mr-1 align-middle'>Game name *</span>
              <input type="text" name="name" id="name" className='align-middle bg-slate-700' onChange={(event) => setName(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Genre *</span>
              <input type="text" name="genre" id="genre" className='align-middle bg-slate-700' onChange={(event) => setGenre(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Subgenres (seperate with commas)</span>
              <input type="text" name="subGenres" id="subGenres" className='align-middle bg-slate-700' onChange={(event) => setSubGenres(event.target.value)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Price (free = 0) *</span>
              <input type="number" name="price" id="price" className='align-middle bg-slate-700' onChange={(event) => setPrice(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Rating *</span>
              <input type="number" name="rating" id="rating" className='align-middle bg-slate-700' onChange={(event) => setRating(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Release date *</span>
              <input type="date" name="rating" id="rating" className='align-middle bg-slate-700' onChange={(event) => setReleaseDate(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Online features?</span>
              <input type="checkbox" name="online" id="online" className='align-middle' onChange={(event) => setOnline(event.target.checked)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Story available?</span>
              <input type="checkbox" name="story" id="story" className='align-middle' onChange={(event) => setStory(event.target.checked)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Platforms (seperate with spaces) *</span>
              <input type="text" name="platforms" id="platforms" className='align-middle bg-slate-700' onChange={(event) => setPlatforms(event.target.value)} required />
          </div>

          <p>Platforms</p>
          <div>
              <span className='text-base mr-1 align-middle'>PC</span>
              <input type="checkbox" name="story" id="story" className='align-middle' onChange={(event) => setPC(event.target.checked)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Playstation</span>
              <input type="checkbox" name="story" id="story" className='align-middle' onChange={(event) => setPlaystation(event.target.checked)} />
          </div>

          <div>
              <span className='text-base mr-1 align-middle'>Developer *</span>
              <input type="text" name="developer" id="developer" className='align-middle bg-slate-700' onChange={(event) => setDeveloper(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Publisher *</span>
              <input type="text" name="publisher" id="publisher" className='align-middle bg-slate-700' onChange={(event) => setPublisher(event.target.value)} required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Link to game's website</span>
              <input type="text" name="link" id="link" className='align-middle bg-slate-700' onChange={(event) => setLink(event.target.value)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Link to game's cover image (right click an image and select "Copy Image Link")</span>
              <input type="text" name="coverLink" id="coverLink" className='align-middle bg-slate-700' onChange={(event) => setCoverLink(event.target.value)} />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Add game</span>
              <button onClick={handleAddGame} className='align-middle'>Add game</button>
          </div>
      </div>
    );
};

export default AddCustomGame;