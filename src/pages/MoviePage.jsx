import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieRequests, imageRequests } from "../Requests";
import axios from "axios";
import Row from "../components/Row";

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(movieRequests.requestMovie(params.id)).then((response) => {
      setMovie(response.data);
    });
  }, [params]);

  return (
    <div>
      <div className="w-full h-[550px]">
        <div className="absolute w-full h-[550px] text-white flex flex-col justify-center p-10 z-10 ">
          <div className="flex flex-row  bg-black/70 rounded-3xl  shadow-black shadow-2xl">
            <img
              className="w-[250px] rounded-lg hover:scale-105 duration-100"
              src={imageRequests.w500Image + movie?.poster_path}
              alt={movie?.title}
            />
            <div className="flex flex-col">
              <h1 className="text-left px-8  py-1 text-3xl font-bold">
                {movie?.title}
              </h1>

              <h1 className="px-8 py-1 text-white rounded-full bg-purple-700 z-10">
                {movie?.release_date}
              </h1>
              <h2 className="px-8 py-2 text-white">{movie?.overview}</h2>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[550px] bg-gradient-to-br from-black"></div>

        <img
          className="w-full h-full object-cover"
          src={imageRequests.originalImage + movie?.backdrop_path}
          alt={movie?.title}
        />
        <Row
          rowID="1"
          title="Similar"
          fetchURL={movieRequests.requestSimilar(params.id)}
        ></Row>
        <div className="absolute w-full h-[550px] bg-gradient-to-br from-black"></div>
      </div>
    </div>
  );
};

export default MoviePage;
