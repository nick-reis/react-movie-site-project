import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

const search = () => {
  const navigate = useNavigate();
  navigate("/search/");
};

const Navbar = () => {
  return (
    <div className="text-white max-w-[1640px] mx-auto flex justify-between items-center p-4 z-[100] w-full absolute">
      <Link
        to="/"
        className="text-2xl sm:text-3xl lg:text-4xl text-purple-700 px-2 cursor-pointer font-black font-mono"
      >
        Website
      </Link>
      <div className="bg-purple-950 rounded-full flex i tems-center px-2 w-[200] sm:w-[400] lg:w-[500]">
        <AiOutlineSearch size={20} />
        <input
          onInput={search}
          className="bg-transparent p-2 w-full t focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center bg-purple-950 rounded-full p-1 cursor-pointer">
        <p className="bg-purple-700 text-white rounded-full p-2 px-4">Movies</p>
        <p className="p-2 px-4">TV</p>
      </div>
    </div>
  );
};

export default Navbar;
