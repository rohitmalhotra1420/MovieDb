import { createReducer } from "../../app/common/utils/reducerUtil";
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

const initialState = {
  fetchingList: false,
  movieList: [],
  pageNumber: 1,
  extraResults: [],
  loadingMore: false
};

export const fetchTrendingMovieListStart = state => {
  return {
    ...state,
    fetchingList: true,
    movieList: []
  };
};

export const fetchTrendingMovieListSuccess = (state, data) => {
  return {
    ...state,
    fetchingList: false,
    movieList: data
  };
};

export const fetchTrendingMovieListFailure = state => {
  return {
    ...state,
    fetchingList: false,
    movieList: []
  };
};
export const setPageNumber = (state, payload) => {
  return {
    ...state,
    pageNumber: payload
  };
};
export const setExtraResults = (state, payload) => {
  return {
    ...state,
    extraResults: payload
  };
};
export const loadMoreResultsStart = state => {
  return {
    ...state,
    loadingMore: true
  };
};
export const loadMoreResultsSuccess = (state, payload) => {
  return {
    ...state,
    loadingMore: false,
    movieList: payload
  };
};
export const loadMoreResultsFailure = (state, payload) => {
  return {
    ...state,
    loadingMore: false
  };
};
export default createReducer(initialState, {
  [FETCH_TRENDING_MOVIE_LIST_START]: fetchTrendingMovieListStart,
  [FETCH_TRENDING_MOVIE_LIST_SUCCESS]: fetchTrendingMovieListSuccess,
  [FETCH_TRENDING_MOVIE_LIST_FAILURE]: fetchTrendingMovieListFailure,
  [SET_PAGE_NUMBER]: setPageNumber,
  [SET_EXTRA_RESULTS]: setExtraResults,
  [LOAD_MORE_RESULTS_START]: loadMoreResultsStart,
  [LOAD_MORE_RESULTS_SUCCESS]: loadMoreResultsSuccess,
  [LOAD_MORE_RESULTS_FAILURE]: loadMoreResultsFailure
});
