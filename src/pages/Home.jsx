import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { movieRequests, newType } from "../Requests";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Row
        rowID="1"
        title="Popular"
        fetchURL={movieRequests.requestPopular}
      ></Row>
      <Row
        rowID="2"
        title="Top Rated"
        fetchURL={movieRequests.requestTopRated}
      ></Row>
      <Row
        rowID="4"
        title="Upcoming"
        fetchURL={movieRequests.requestUpcoming}
      ></Row>
    </div>
  );
};

export default Home;
