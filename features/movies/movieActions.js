import {
  FETCH_TRENDING_MOVIE_LIST_START,
  FETCH_TRENDING_MOVIE_LIST_SUCCESS,
  FETCH_TRENDING_MOVIE_LIST_FAILURE,
  SET_PAGE_NUMBER,
  SET_EXTRA_RESULTS,
  LOAD_MORE_RESULTS_START,
  LOAD_MORE_RESULTS_SUCCESS,
  LOAD_MORE_RESULTS_FAILURE
} from "./movieConstants";
import { trendingMoviesApiCall } from "./api";
import { addLikeFlagToMovies } from "../../app/common/utils/commonUtils";

export const fetchTrendingMovieListStart = () => {
  return {
    type: FETCH_TRENDING_MOVIE_LIST_START
  };
};

export const fetchTrendingMovieListSuccess = data => {
  return {
    type: FETCH_TRENDING_MOVIE_LIST_SUCCESS,
    payload: data
  };
};

export const fetchTrendingMovieListFailure = () => {
  return {
    type: FETCH_TRENDING_MOVIE_LIST_FAILURE
  };
};

export const setPageNumber = num => {
  return {
    type: SET_PAGE_NUMBER,
    payload: num
  };
};

export const setExtraResults = data => {
  return {
    type: SET_EXTRA_RESULTS,
    payload: data
  };
};
export const fetchTrendingMovieList = page => async dispatch => {
  dispatch(fetchTrendingMovieListStart());
  return trendingMoviesApiCall(page)
    .then(response => response.json())
    .then(json => {
      let firstTen = json.results.slice(0, 10);
      let lastTen = json.results.slice(10);
      let refactoredFirstTen = addLikeFlagToMovies(firstTen);
      let refactoredLastTen = addLikeFlagToMovies(lastTen);
      dispatch(fetchTrendingMovieListSuccess(refactoredFirstTen));
      dispatch(setExtraResults(refactoredLastTen));
      dispatch(setPageNumber(page));
    })
    .catch(error => {
      dispatch(fetchTrendingMovieListFailure());
      alert(error.message);
    });
};

export const loadMoreResultsStart = () => {
  return {
    type: LOAD_MORE_RESULTS_START
  };
};
export const loadMoreResultsSuccess = data => {
  return {
    type: LOAD_MORE_RESULTS_SUCCESS,
    payload: data
  };
};
export const loadMoreResultsFailure = () => {
  return {
    type: LOAD_MORE_RESULTS_FAILURE
  };
};

export const loadMoreResults = page => async (dispatch, getState) => {
  dispatch(loadMoreResultsStart());
  const extraResults = getState().movies.extraResults;
  if (extraResults.length > 0) {
    let firstTenResults = getState().movies.movieList;
    let updatedArray = firstTenResults.concat(extraResults);
    dispatch(loadMoreResultsSuccess(updatedArray));
    dispatch(setExtraResults([]));
  } else {
    return trendingMoviesApiCall(page)
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        let firstTen = json.results.slice(0, 10);
        let lastTen = json.results.slice(10);
        let refactoredFirstTen = addLikeFlagToMovies(firstTen);
        let refactoredLastTen = addLikeFlagToMovies(lastTen);
        let previousResults = getState().movies.movieList;
        let updatedArray = previousResults.concat(refactoredFirstTen);
        dispatch(loadMoreResultsSuccess(updatedArray));
        dispatch(setExtraResults(refactoredLastTen));
        dispatch(setPageNumber(page));
      })
      .catch(error => {
        dispatch(loadMoreResultsFailure());
        alert(error.message);
      });
  }
};

export const handleLikeSystem = id => (dispatch, getState) => {
  let movieList = getState().movies.movieList;
  movieList.forEach(movie => {
    if (movie.id === id) {
      if (movie.likeFlag === true) {
        movie.likeFlag = false;
      } else {
        movie.likeFlag = true;
      }
    }
  });
  let newArr = [];
  dispatch(loadMoreResultsSuccess(newArr.concat(movieList)));
};
