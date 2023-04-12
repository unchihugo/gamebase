import React, { useState, useEffect } from "react";
import "./css/NavBar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Set top to true if page is scrolled to top, otherwise false
  useEffect(() => {
    const scrollHandler = () => {
        setTop(window.pageYOffset <= 20)
    };
    window.addEventListener('scroll', scrollHandler);
    
    scrollHandler(); 
    
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    }
}, []);

  return (
    <nav className={`bg-slate-800 fixed top-0 left-0 right-0 z-10 border-b border-slate-600 font-display
      ${!top && 'bg-opacity-60 bg-slate-800 backdrop-blur-lg'}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between align-middle">
          <div className="flex items-center">
            <a href="/home" className=" font-bold text-xl">
              Gamebase
            </a>
            <div className="hidden md:flex">
              <a
                  href="/home"
                  className="hover:text-slate-300 mx-2 ml-6"
                >Home</a>
                <a
                  href="/library"
                  className="hover:text-slate-300 mx-2"
                >Library</a>
                <a
                  href="/charts"
                  className="hover:text-slate-300 mx-2"
                >Charts</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" hover:text-slate-300 focus:outline-none focus:text-slate-300"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 12H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0-5H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 10H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:w-auto">
            <div className="flex items-center">
            {localStorage.getItem('idGebruiker') === null ? (
              <div>
              <a href="/login" className="px-4 py-1 rounded-lg border border-slate-600 focus:outline-none hover:bg-slate-900 mr-2 font-medium">
                Log in
                </a>
              <a href="/signup" className="bg-red-500 px-4 py-1 rounded-lg focus:outline-none font-medium hover:bg-red-600">
                Sign up
                </a>
              </div>
            ) : ( <div>
              <a href="/profile" className="font-bold font-display pl-6 pr-4 py-1 focus:outline-none mr-2 border-l border-slate-500">
                {localStorage.getItem('Naam')}
                </a>
                <a className="bg-red-500 px-4 py-1 rounded-lg focus:outline-none bg-opacity-25" onClick={() => {localStorage.removeItem('idGebruiker'); localStorage.removeItem('Naam'); window.location.reload();}}>
                  Log out
                  </a>
              </div>
                  )}
            </div>
        </div>
    </div>
</div>
{isOpen && (
    <div className="md:show">
      <div className="px-2 pt-2 pb-3">
        <a
          href="/home"
          className="block mt-4 md:inline-block md:mt-0 text-white hover:text-slate-300 mr-4"
        >
          Home
        </a>
        <a
          href="/library"
          className="block mt-4 md:inline-block md:mt-0 text-white hover:text-slate-300 mr-4"
        >
          Library
        </a>
        <a
          href="/charts"
          className="block mt-4 md:inline-block md:mt-0 text-white hover:text-slate-300"
        >
          Charts
        </a>
        {localStorage.getItem('idGebruiker') === null ? (
              <div>
              <a href="/login" className="bg-slate-700 text-white px-4 py-1 rounded-lg focus:outline-none mr-2 font-medium">
                Log in
                </a>
              <a href="/signup" className="bg-red-500 text-white px-4 py-1 rounded-lg focus:outline-none font-medium">
                Sign up
                </a>
              </div>
            ) : ( <div>
              <a href="/profile" className="font-bold font-display text-white px-4 py-1 focus:outline-none mr-2">
                {localStorage.getItem('Naam')}
                </a>
                <a className="bg-red-500 text-white px-4 py-1 rounded-lg focus:outline-none bg-opacity-25" onClick={() => {localStorage.removeItem('idGebruiker'); localStorage.removeItem('Naam'); window.location.reload();}}>
                  Log out
                  </a>
              </div>
                  )}
      </div>
    </div>
  )}
</nav>

);
};

export default NavBar;
