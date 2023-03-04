import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800">
      <div className="mx-auto px-4">
        <div className="flex justify-between align-middle">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              Gamebase
            </a>
            <div className="lg:flex lg:items-center hidden ml-10">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
              >
                Home
              </a>
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
              >
                About
              </a>
              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-slate-300 focus:outline-none focus:text-slate-300"
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
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="flex items-center">
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none mr-2">
                Login
                </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg focus:outline-none">
                Sign up
                </button>
            </div>
        </div>
    </div>
</div>
{isOpen && (
    <div className="lg:hidden">
      <div className="px-2 pt-2 pb-3">
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
        >
          Home
        </a>
        <a
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
        >
          About
        </a>
        <a
          href="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300"
        >
          Contact
        </a>
      </div>
    </div>
  )}
</nav>

);
};

export default Navbar;
