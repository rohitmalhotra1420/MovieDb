import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";

import { configureStore } from "./app/store/configureStore";
import MoviesScreen from "./features/movies/MoviesScreen";

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MoviesScreen />
      </Provider>
    );
  }
}

export default App;
