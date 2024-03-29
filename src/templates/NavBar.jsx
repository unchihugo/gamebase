import "./css/NavBar.css"
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";	

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [url, setUrl] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
    
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
      <div className="container mx-auto h-12 p-2">
        <div className="flex justify-between align-middle">
          <div className="flex items-center">
            <Link to="/home" className=" font-bold text-xl">
              <img src={logo} alt="Gamebase logo" className="max-h-8" />
            </Link>
            <div className="hidden md:flex">
              <Link
                  to="/home"
                  className={"hover:text-slate-300 mx-2 ml-4 transition" + (url === "/home" ? " active" : "")}
                >Home</Link>
                <Link
                  to="/library"
                  className={"hover:text-slate-300 mx-2 transition" + (url === "/library" ? " active" : "")}
                >Library</Link>
                {<Link
                  to="/users"
                  className={"hover:text-slate-300 mx-2 transition" + (url === "/users" ? " active" : "")}
                >Users</Link>}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" hover:text-slate-300 focus:outline-none focus:text-slate-300"
            >
              <svg
                className="h-6 w-6 fill-current -mb-3"
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
              <Link to="/login" className="px-4 py-1 rounded-lg border border-slate-600 focus:outline-none hover:bg-slate-900 mr-2 font-medium transition">
                Log in
                </Link>
              <Link to="/signup" className="bg-red-500 px-4 py-1 rounded-lg focus:outline-none font-medium hover:bg-red-600 transition">
                Sign up
                </Link>
              </div>
            ) : ( <div>
              <Link to={`/users/${localStorage.getItem('idGebruiker')}`} className="font-medium font-display pl-6 pr-4 py-1 focus:outline-none mr-2 border-l border-slate-500 transition">
                {localStorage.getItem('Naam')}
                </Link>
                <a className="bg-red-500 px-4 py-1 rounded-lg focus:outline-none bg-opacity-25 transition cursor-pointer" onClick={() => {localStorage.removeItem('idGebruiker'); localStorage.removeItem('Naam'); window.location.reload();}}>
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
      <div className="px-6 pt-3 pb-5 bg-slate-800 bg-opacity-80 border-t border-slate-600">
        <Link
          to="/home"
          className="block md:inline-block text-white hover:text-slate-300"
        >
          Home
        </Link>
        <Link
          to="/library"
          className="block mt-4 md:inline-block md:mt-0 text-white hover:text-slate-300"
        >
          Library
        </Link>
        {<Link
          to="/users"
          className="block my-4 md:inline-block md:mt-0 text-white hover:text-slate-300"
        >
          Users
        </Link>}
        {localStorage.getItem('idGebruiker') === null ? (
              <div className="mt-4">
              <Link to="/login" className="bg-slate-700 text-white px-4 py-1 rounded-lg focus:outline-none mr-2 font-medium">
                Log in
                </Link>
              <Link to="/signup" className="bg-red-500 text-white px-4 py-1 rounded-lg focus:outline-none font-medium">
                Sign up
                </Link>
              </div>
            ) : ( <div>
              <Link to={`/users/${localStorage.getItem('idGebruiker')}`} className="font-bold font-display text-white px-4 py-1 focus:outline-none mr-2">
                {localStorage.getItem('Naam')}
                </Link>
                <Link className="bg-red-500 text-white px-4 py-1 rounded-lg focus:outline-none bg-opacity-25 cursor-pointer" onClick={() => {localStorage.removeItem('idGebruiker'); localStorage.removeItem('Naam'); window.location.reload();}}>
                  Log out
                  </Link>
              </div>
                  )}
      </div>
    </div>
  )}
</nav>

);
};

export default NavBar;
