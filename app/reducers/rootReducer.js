import { combineReducers } from "redux";
import movieReducer from "../../features/movies/movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;
