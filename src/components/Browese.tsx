import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Slider from "./slider";
import { API_OPTIONS, apiClient } from "../constant/constant";
import { addNowPlayingMovies } from "../redux/slices/movie";
import { useNowPlayingMovies } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browese = () => {
  const imagesItem = [
    {
      src: "https://picsum.photos/id/237/800/600",
      alt: "Image 1",
      title: "Image 1",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/238/800/600",
      alt: "Image 2",
      title: "Image 2",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/239/800/600",
      alt: "Image 3",
      title: "Image 3",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/240/800/600",
      alt: "Image 4",
      title: "Image 4",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/241/800/600",
      alt: "Image 5",
      title: "Image 5",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/242/800/600",
      alt: "Image 6",
      title: "Image 6",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/243/800/600",
      alt: "Image 7",
      title: "Image 7",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
    {
      src: "https://picsum.photos/id/244/800/600",
      alt: "Image 8",
      title: "Image 8",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex in",
    },
  ];

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* <div className="pt-20">
        <Slider items={imagesItem} />
      </div> */}
    </div>
  );
};

export default Browese;
