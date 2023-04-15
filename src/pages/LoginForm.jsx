import React, { useEffect } from "react";
import axios from "axios";
import consoleBg from "../images/consoles-bg.jpg";

const LoginForm = () => {
  // useEffect to check if the user is already logged in
  useEffect(() => {
    if (localStorage.getItem("idGebruiker") !== null) {
      window.location.href = "./home";
    }
  }, []);

  // function for handleLogin to work with the database with axios.get from the api
  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const response = await axios.get("http://localhost/gamebase/authApi.php");

    for (let i = 0; i < response.data.length; i++) {
      if (
        response.data[i].Gebruikersnaam === username &&
        response.data[i].Wachtwoord === password
      ) {
        localStorage.setItem("idGebruiker", response.data[i].idGebruiker);
        localStorage.setItem("Naam", response.data[i].Naam);
      }
    }

    if (localStorage.getItem("idGebruiker") !== null) {
      window.location.href = "./home";
    } else {
      alert("Login failed");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-full bg-cover bg-center"
      style={{
        height: '85vh',
        backgroundImage: `url(${consoleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 0 50px 50px #0f172a inset"
      }}
    >
      <div className="max-w-md w-full px-4 py-8 rounded-xl shadow-lg border border-slate-600 bg-slate-900 bg-opacity-80 backdrop-blur-xl">
        <div className="flex flex-col items-center">
          <span className="material-symbols-rounded text-3xl">password</span>
          <h2 className="text-center text-xl font-display font-semibold mt-1 mb-8">Log in to Gamebase</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold font-display py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline mt-4 transition"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
