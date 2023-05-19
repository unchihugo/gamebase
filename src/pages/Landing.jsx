import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import sal from 'sal.js';
import 'sal.js/dist/sal.css';

import icon from "../images/icon1024.png";
import gameCardImage from "../images/gameCard.png";
import gameStatsImage from "../images/gameStats.png";
import gameFormImage from "../images/gameForm.png";

import wave1 from "../images/waves/wave1.svg";
import wave2 from "../images/waves/wave2.svg";


const Landing = () => {
    useEffect(() => {
        sal();
    }, []);

    return (
        <div className="-mb-16">
            <div className="pt-32 font-display bg-slate-800">
                <h1 className="text-5xl lg:text-6xl font-bold text-center text-slate-100 mb-6">
                    <img src={icon} alt="" style={{ objectFit: "cover", width: "200px", height: "200px" }} className="mx-auto" />
                    <h1 className="text-5xl lg:text-6xl font-bold text-center text-slate-100 mb-6">
                        Welcome to <span className="text-red-500">Gamebase</span>
                        <span className="text-red-500 animate-pulse font-normal">|</span>
                    </h1>
                </h1>
                <p className="text-xl text-center text-slate-100">
                    Your library to find and add your favorite games.
                </p>
                <p className="text-xl text-center text-slate-100">
                    Click{" "}
                    <Link to="/home" className="text-blue-500 hover:text-blue-400">
                        here
                    </Link>{" "}
                    to go to Gamebase!
                </p>
                <div className="flex justify-center mt-10">
                    <p className="mr-1.5">Scroll down to find out more</p>
                    <svg className="animate-bounce w-6 h-6 text-slate-100" viewBox="0 0 24 24">
                        <path d="M12 20V4M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>
            </div>
            <img src={wave1} alt="" style={{ width: "100%", objectFit: "cover" }} />
            <div className="flex flex-col lg:flex-row justify-center container mx-auto" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-slate-100 mb-4 font-display">Find Your Favorite Games</h2>
                    <p className="text-lg text-center text-slate-400">
                        Gamebase makes it easy to search for and find your favorite games. With our extensive library of games, you're sure to find something you love.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <img src={gameCardImage} alt="" style={{ width: "auto", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center mt-20 container mx-auto" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
                <div className="w-full lg:w-1/2 p-4">
                    <img src={gameStatsImage} alt="" style={{ width: "auto", height: "100%", objectFit: "cover" }} className="shadow-lg shadow-black rounded-2xl" />
                </div>
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-slate-100 mb-4 font-display">Discover The Details</h2>
                    <p className="text-lg text-center text-slate-400">
                        Gamebase provides detailed information about each game, including the release date, genre, and platform. You can also save it to your Library.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center mt-20 container mx-auto" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center text-slate-100 mb-4 font-display">Add The Games You Like</h2>
                    <p className="text-lg text-center text-slate-400">
                        With Gamebase, you can add your own games to our library. Just click the "Add Game" button and fill out the form. It's that easy!
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <img src={gameFormImage} alt="" style={{ width: "auto", height: "100%", objectFit: "cover" }} className="shadow-lg shadow-black rounded-2xl" />
                </div>
            </div>
            <p className="mt-20 text-2xl font-bold text-center text-slate-100 font-display" data-sal="slide-up" data-sal-delay="500" data-sal-duration="2000">
                And many more features to discover!
            </p>
            <img src={wave2} alt="" style={{ width: "100%", objectFit: "cover" }} />
            <div className="pb-60 font-display bg-slate-800">
                <h1 className="text-3xl font-bold text-center text-slate-100 mb-6">
                    Ready to join Gamebase?
                </h1>
                <p className="text-xl text-center text-slate-100">
                    Click{" "}
                    <Link to="/signup" className="text-blue-500 hover:text-blue-400">
                        here
                    </Link>{" "}
                    to create an account!
                </p>
            </div>
        </div>
    );
};

export default Landing;