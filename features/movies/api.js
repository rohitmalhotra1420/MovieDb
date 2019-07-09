import { API_KEY } from "../../app/common/utils/Constants";

export const trendingMoviesApiCall = page => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    {
      method: "GET"
    }
  );
};
