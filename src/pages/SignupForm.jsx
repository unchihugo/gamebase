import React, { useEffect, useState } from "react";
import axios from "axios";
import consoleBg from "../images/consoles-bg.jpg";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");

    // useEffect to check if the user is already logged in
    useEffect(() => {
      if (localStorage.getItem("idGebruiker") !== null) {
        window.location.href = "./home";
      }
    }, []);
  
    const handleSignup = async (event) => {
        event.preventDefault();
          
        if (password === password2) {
            try {
                const response = await axios.post("http://localhost:3001/users", {
                  username,
                  password,
                  name
                });
                
                if (response.status === 200) {
                  window.location.href = "./login";
                } 
              } catch (error) {
                if (error.response && error.response.status === 409) {
                  alert("Username is already taken");
                } else {
                  alert("Something went wrong, ensure that all fields are filled in correctly");
                }
              }
                          
        } else {
          alert("Passwords do not match");
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
          boxShadow: "0 0 50px 50px #0f172a inset",
        }}
      >
        <div className="max-w-md w-full px-4 py-8 rounded-xl shadow-lg border border-slate-600 bg-slate-900 bg-opacity-80 backdrop-blur-xl">
          <div className="flex flex-col items-center mb-8">
            <span className="-mt-2 text-3xl">👋</span>
            <h2 className="text-xl font-display font-semibold mt-1">Welcome to Gamebase</h2>
            <h2 className="text-lg text-slate-300">Create an account to:</h2>
            <h2 className="text-slate-400">- Get a profile to share with your friends</h2>
            <h2 className="text-slate-400">- Add custom games</h2>
            <h2 className="text-slate-400">- Save stats to games</h2>
            <h2 className="text-slate-400">- Compare yourself to others</h2>
            <h2 className="text-slate-400">- And more...</h2>
          </div>
          <form onSubmit={handleSignup}>
            <div className="mb-6">
              <label className="block font-bold mb-2" htmlFor="username">
                Unique Username
              </label>
              <input
                className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
                type="text"
                name="username"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="mb-1.5">
              <label className="block font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
                type="password"
                name="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block italic text-slate-300 text-sm mb-2" htmlFor="password2">
                Confirm password
              </label>
              <input
                className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
                type="password"
                name="password2"
                id="password2"
                onChange={(event) => setPassword2(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password2">
                What's your name?
              </label>
              <input
                className="border border-slate-400 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 transition bg-transparent"
                type="text"
                name="name"
                id="name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold font-display py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline mt-4 transition"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupForm;