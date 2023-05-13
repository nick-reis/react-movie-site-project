import React, { useEffect, useState } from "react";
import { movieRequests, imageRequests, miscRequest } from "../Requests";
import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Requests";

const Hero = () => {
  const [movie_type] = useGlobalState("mType");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(movieRequests.requestPopular(movie_type)).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-br from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={imageRequests.originalImage + movie?.backdrop_path}
          alt={miscRequest.requestTitle(movie_type, movie)}
        />
        <div>
          <div className="absolute w-full top-[40%] p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl py-2 px-1 font-bold">
              {miscRequest.requestTitle(movie_type, movie)}
              {}
            </h1>
            {/* <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movie?.overview}
  </p> */}
            <Link to={"/" + movie?.id}>
              <button className="bg-purple-700 text-white  border border-purple-700 rounded-full py-2 px-5 hover:scale-105 hover:border-white duration-100">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
