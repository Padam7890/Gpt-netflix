import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiClient } from "../constant/constant";
import { addNowPlayingMovies } from "../redux/slices/movie";

export const useNowPlayingMovies = () => {

    const [nowPlaying,setNowPlaying] = useState([])

  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // Function to get popular movies
  const getNowPlayingMovies = async () => {
    try {
      const response = await apiClient.get("movie/now_playing", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
        },
      });
      console.log("Popular movies:", response.data.results);
      dispatch(addNowPlayingMovies( response.data.results));
      setNowPlaying(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  };

  return {
    nowPlaying,
    getNowPlayingMovies,
  };

};
