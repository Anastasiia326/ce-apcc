import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.screen.width < 1024) setHidden(true);
  }, [])

  const handleToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <nav className="navbar container flex flex-col lg:flex-row justify-between items-center bg-transparent px-4 py-10 mx-auto">
      <div className="nav-left flex justify-between items-center w-full">
        <div><Link to="/" className="cursor-pointer">
          <img className="nav-logo w-20 h-auto" src={logo} alt="logo" />
        </Link></div>
        <button
          data-target="#navbar-dropdown"
          data-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center w-fit p-2 ml-3 text-xl text-gray-500 rounded-lg lg:hidden bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <ul className={`${hidden ? "hidden" : ""} text-black lg:block lg:w-auto min-w-full lg:min-w-fit ${!collapse ? "hidden" : ""}`} id="navbar-dropdown">
        <li className="lg:inline-block mx-4"><Link to="/home" className="text-xl leading-loose hover:text-[#1BAE70]">Home</Link></li>
        <li className="lg:inline-block mx-4 hover:text-[#1BAE70]">
          <Link to="/about" className="dropbtn flex flex-row items-center text-xl leading-loose hover:text-[#1BAE70]">
            About us <FaChevronDown className="text-[#686868] text-base ml-2" />
          </Link>
          <div className="dropdown-content">
            <Link to="/collaborators" className="text-xl leading-loose hover:text-[#1BAE70]">Collaborators</Link>
          </div>
        </li>
        <li className="lg:inline-block mx-4 hover:text-[#1BAE70]">
          <Link to="/resource" className="dropbtn flex flex-row items-center text-xl leading-loose hover:text-[#1BAE70]">
            Resources <FaChevronDown className="text-[#686868] text-base ml-2" />
          </Link>
          <div className="dropdown-content">
            <Link to="/news" className="text-xl leading-loose hover:text-[#1BAE70]">News and articles</Link>
            <Link to="/publication" className="text-xl leading-loose hover:text-[#1BAE70]">Useful publications</Link>
          </div>
        </li>
        <li className="lg:inline-block mx-4"><Link to="/cohorts" className="text-xl leading-loose hover:text-[#1BAE70]">African Cohorts</Link></li>
        <li className="lg:inline-block mx-4"><Link to="/contact" className="text-xl leading-loose hover:text-[#1BAE70]">Contact</Link></li>
        <li className="lg:inline-block mx-4"><Link to="/login" className="text-[#1BAE70] text-xl leading-loose hover:text-black">Log in</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;