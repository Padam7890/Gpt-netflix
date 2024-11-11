import { RootState } from "@reduxjs/toolkit/query";
import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/store";

const MainContainer = () => {
  const movies = useAppSelector((state) => state.movies.nowPlayingMovies);
  
  return <div>MainContainer</div>;
};

export default MainContainer;
