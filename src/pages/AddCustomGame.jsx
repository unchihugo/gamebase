import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCustomGame = () => {
    // return user to home if not logged in
    useEffect(() => {
        if (localStorage.getItem("idGebruiker") !== null) {
          window.location.href = "./home";
        }
      }, []);

    // function to use the server.js file to add a game to the database and using id of the user who added it for fkUser
    const handleAddGame = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const genre = event.target.genre.value;
        const subGenres = event.target.subGenres.value;
        const price = event.target.price.value;
        const rating = event.target.rating.value;
        const releaseDate = event.target.releaseDate.value;
        const online = event.target.online.value;
        const story = event.target.story.value;
        const platforms = event.target.platforms.value;
        const developer = event.target.developer.value;
        const publisher = event.target.publisher.value;
        const fkUser = localStorage.getItem("idGebruiker");

        const response = await axios.post("http://localhost:3001/addCustomGame", {
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
            fkUser
        });

        if (response.status === 200) {
            window.location.href = "./home";
        } else {
            alert("Something went wrong, ensure that all fields are filled in correctly");
        }
    };

    return(
      <div>
          <h1>Add custom game</h1>
          <div>
              <span className='text-base mr-1 align-middle'>Game name *</span>
              <input type="text" name="name" id="name" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Genre *</span>
              <input type="text" name="genre" id="genre" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Subgenres (seperate with commas)</span>
              <input type="text" name="subGenres" id="subGenres" className='align-middle' />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Price (free = 0) *</span>
              <input type="number" name="price" id="price" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Rating *</span>
              <input type="number" name="rating" id="rating" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Release date *</span>
              <input type="date" name="rating" id="rating" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Online features?</span>
              <input type="checkbox" name="online" id="online" className='align-middle' />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Story available?</span>
              <input type="checkbox" name="story" id="story" className='align-middle' />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Platforms (seperate with spaces) *</span>
              <input type="text" name="platforms" id="platforms" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Developer *</span>
              <input type="text" name="developer" id="developer" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Publisher *</span>
              <input type="text" name="publisher" id="publisher" className='align-middle' required />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Link to game's website</span>
              <input type="text" name="link" id="link" className='align-middle' />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Link to game's cover image (right click an image and select "Copy Image Link")</span>
              <input type="text" name="coverLink" id="coverLink" className='align-middle' />
          </div>
          <div>
              <span className='text-base mr-1 align-middle'>Add game</span>
              <button onClick={handleAddGame} className='align-middle'>Add game</button>
          </div>
      </div>
    );
};

export default AddCustomGame;