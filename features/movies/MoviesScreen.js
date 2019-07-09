import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MovieList from "./MovieList";
class MoviesScreen extends Component {
  state = {};
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.navBar}>
          <View style={Styles.leftNav}>
            <Image
              source={require("../../assets/movie.png")}
              resizeMode="contain"
              style={{ width: "16%", marginRight: "4%" }}
            />
            <Text style={Styles.navText}>MoviesDb</Text>
          </View>
          <View />
        </View>
        <MovieList />
      </View>
    );
  }
}

export default MoviesScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: "white",
    height: 50,
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  leftNav: {
    flexDirection: "row",
    alignItems: "center"
  },
  navText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }
});
