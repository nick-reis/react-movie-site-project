import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </>
  );
}
