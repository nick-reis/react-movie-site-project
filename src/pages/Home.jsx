import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { movieRequests, setGlobalState, useGlobalState } from "../Requests";

const Home = () => {
  setGlobalState("home", true);
  const [movie_type] = useGlobalState("mType");
  return (
    <div>
      <Hero></Hero>
      <Row
        rowID="1"
        title="Popular"
        fetchURL={movieRequests.requestPopular(movie_type)}
        horizontal={true}
      ></Row>
      <Row
        rowID="2"
        title="Top Rated"
        fetchURL={movieRequests.requestTopRated(movie_type)}
        horizontal={true}
      ></Row>
      <Row
        rowID="4"
        title="Upcoming"
        fetchURL={movieRequests.requestUpcoming(movie_type)}
        horizontal={true}
      ></Row>
    </div>
  );
};

export default Home;
