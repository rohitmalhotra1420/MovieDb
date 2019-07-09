import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const configureStore = preloadedState => {
  const middlewares = applyMiddleware(thunk);

  const store = createStore(rootReducer, preloadedState, middlewares);

  return store;
};
