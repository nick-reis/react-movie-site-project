import React from "react";
import { Link, useMatch } from "react-router-dom";
import Searchbar from "./Searchbar";
import { setGlobalState, useGlobalState } from "../Requests";

const Navbar = () => {
  const [movie_type] = useGlobalState("mType");
  const [isHome] = useGlobalState("home");
  let movieButton = "";
  let tvButton = "";
  if (movie_type === "movie") {
    movieButton = "bg-purple-700 text-white rounded-full p-2 px-4";
    tvButton = "p-2 px-4";
  } else if (movie_type === "tv") {
    movieButton = "p-2 px-4";
    tvButton = "bg-purple-700 text-white rounded-full p-2 px-4";
  }

  return (
    <div className="text-white max-w-[1640px] mx-auto flex justify-between items-center p-4 z-[100] w-full absolute">
      <Link
        to="/"
        className="text-2xl sm:text-3xl lg:text-4xl text-purple-700 px-2 cursor-pointer font-black font-mono"
      >
        Website
      </Link>
      <Searchbar />
      {/* {isHome && (
        <div className="flex items-center bg-purple-950 rounded-full p-1 cursor-pointer">
          <button
            className={movieButton}
            onClick={() => {
              setGlobalState("mType", "movie");
            }}
          >
            Movies
          </button>
          <button
            className={tvButton}
            onClick={() => {
              setGlobalState("mType", "tv");
            }}
          >
            TV
          </button>
        </div>
      )}
          */}
    </div>
  );
};

export default Navbar;
