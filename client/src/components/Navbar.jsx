import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyBrand
        </Link>

        <button
          className="lg:hidden block p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`lg:flex gap-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-transform ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 ${
                  location.pathname === "/" ? "text-blue-400" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-4 py-2 ${
                  location.pathname === "/about"
                    ? "text-blue-400"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block px-4 py-2 ${
                  location.pathname === "/contact"
                    ? "text-blue-400"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
