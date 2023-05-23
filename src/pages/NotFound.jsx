import React, { useState, useEffect } from "react";
import "../index.css";


const NotFound = () => {

    return (
        <div className="flex flex-col relative bg-slate-900">
            <div className="flex" style={{ minHeight: "80.9vh" }}>
                <div className="flex-1 container py-16 mx-auto">
                    <div className="mx-4 py-8 bg-slate-800 rounded-2xl border border-slate-500">
                        <div className="flex justify-center items-center">
                            <span className="material-symbols-rounded text-6xl lg:text-7xl pb-5 text-slate-400">search_off</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-center font-display">
                            404
                        </h1>
                        <h2 className="text-xl lg:text-2xl font-bold text-center mb-5 font-display">
                            Page Not Found
                        </h2>
                        <p className="text-lg lg:text-xl font-bold text-center text-slate-400 font-display">
                            The page you are looking for does not exist.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;