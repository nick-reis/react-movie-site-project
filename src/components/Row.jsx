import axios from "axios";
import React, { useEffect, useState } from "react";
import { movieRequests } from "../Requests";
import Movie from "./Movie";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md: text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-2 border rounded-full absolute opacity-60 hover:opacity-100 hover:bg-purple-700 hover:text-white hidden group-hover:block duration-100 cursor-pointer z-10"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-2  border rounded-full absolute opacity-60 hover:opacity-100 hover:bg-purple-700 hover:text-white hidden group-hover:block duration-100 cursor-pointer z-10"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
