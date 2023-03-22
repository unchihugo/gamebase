import React, { useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  // useEffect to check if the user is already logged in
  useEffect(() => {
    if (localStorage.getItem('idGebruiker') !== null) {
      window.location.href = './home';
    }
  }, []);

  // function for handleLogin to work with the database with axios.get from the api
  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
  
    const response = await axios.get('http://localhost/gamebase/authApi.php');

    for (let i=0; i<response.data.length; i++) {
      if (response.data[i].Gebruikersnaam === username && response.data[i].Wachtwoord === password) {
        localStorage.setItem('idGebruiker', response.data[i].idGebruiker);
        localStorage.setItem('Naam', response.data[i].Naam);
      }
    }
    
    if (localStorage.getItem('idGebruiker') !== null) {
      window.location.href = './home';
    } else {
        alert('Login failed');
    }
  }

  return (

  <div className="text-white"> 
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input className="text-black" type="text" name="username" required />
      </label>
      <label>
        Password:
        <input className="text-black" type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
    </div>
  );
}

export default LoginForm;