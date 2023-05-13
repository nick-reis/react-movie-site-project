import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  movieRequests,
  imageRequests,
  miscRequest,
  useGlobalState,
  setGlobalState,
} from "../Requests";
import axios from "axios";
import Row from "../components/Row";
import Actor from "../components/Actor";

const MoviePage = () => {
  setGlobalState("home", false);
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [casts, setCast] = useState([]);
  const [movie_type] = useGlobalState("mType");

  useEffect(() => {
    axios
      .get(movieRequests.requestMovie(movie_type, params.id))
      .then((response) => {
        setMovie(response.data);
      });
    axios
      .get(movieRequests.requestCast(movie_type, params.id))
      .then((response) => {
        setCast(response.data.cast);
      });
  }, [params]);

  const cast = casts.slice(0, 4);

  console.log(cast);

  const genreString = () => {
    let s = "";
    {
      movie.genres?.map((item, id) => (s += item?.name + ", "));
    }
    s = s.substring(0, s.length - 2);

    return s;
  };

  return (
    <div>
      {console.log(movie)}
      <div className="w-full h-[550px]">
        <div className="absolute w-full h-[550px] text-white flex flex-col justify-center p-10 z-10 ">
          <div className="flex flex-row  bg-black/70 rounded-3xl  shadow-black shadow-2xl">
            <img
              className="w-[250px] rounded-lg hover:scale-105 duration-100"
              src={imageRequests.w500Image + movie?.poster_path}
              alt={miscRequest.requestTitle(movie_type, movie)}
            />
            <div className="flex flex-col">
              <h1 className="text-left px-8  py-1 text-3xl font-bold">
                {miscRequest.requestTitle(movie_type, movie)}
              </h1>

              <h1 className="px-8 py-1 text-white rounded-full bg-purple-700 z-10">
                {miscRequest.requestDate(movie_type, movie)}
              </h1>
              <h2 className="px-8 py-2 text-white">{movie?.overview}</h2>
              <h2 className="px-8 py-2 text-white">
                {"Genres: " + genreString()}
              </h2>
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
          title="Recommended:"
          fetchURL={movieRequests.requestSimilar(
            useGlobalState("mType"),
            params.id
          )}
          horizontal={true}
        ></Row>
        <div className="absolute w-full h-[550px] bg-gradient-to-br from-black"></div>
      </div>
    </div>
  );
};

export default MoviePage;
