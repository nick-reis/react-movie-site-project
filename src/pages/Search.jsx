import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "../components/Row";
import { movieRequests, setGlobalState, useGlobalState } from "../Requests";

const Search = () => {
  setGlobalState("home", false);
  const params = useParams();
  const movie = params.id;
  const [movie_type] = useGlobalState("mType");
  return (
    <div className="py-[100px]">
      <Row
        rowID="1"
        title={"Results for " + '"' + movie.replace(/\+/g, " ") + '": '}
        fetchURL={movieRequests.search(movie_type, movie)}
        horizontal={false}
      ></Row>
    </div>
  );
};

export default Search;
