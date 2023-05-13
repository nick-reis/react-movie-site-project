import React from "react";
import { imageRequests } from "../Requests";
import { Link } from "react-router-dom";
import defaultImg from "../template.jpeg";

const Movie = ({ item }) => {
  return (
    <div className="h-[235px] w-[175px] inline-block cursor-pointer relative p-2 hover:scale-105 duration-150 overflow-hidden">
      <Link to={"/" + item?.id}>
        <img
          className="block filter hover:brightness-110"
          src={imageRequests.w500Image + item?.poster_path}
          onError={(event) => {
            event.target.src = defaultImg;
          }}
        />
      </Link>
    </div>
  );
};

export default Movie;
