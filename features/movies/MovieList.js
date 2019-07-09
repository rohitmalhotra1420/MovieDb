import React, { Component } from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import MovieListItem from "./MovieListItem";
import { connect } from "react-redux";
import {
  fetchTrendingMovieList,
  loadMoreResults,
  handleLikeSystem
} from "./movieActions";
import { ActivityIndicator } from "react-native";
class MovieList extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchTrendingMovieList(1);
  }
  render() {
    const {
      movieList,
      fetchingList,
      loadMoreResults,
      pageNumber,
      loadingMore,
      handleLikeSystem
    } = this.props;
    if (fetchingList === true) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    }
    return (
      <ScrollView style={{ flex: 1, paddingTop: "5%" }}>
        {movieList &&
          movieList.map((item, index) => {
            return (
              <MovieListItem
                key={index}
                movieItem={item}
                handleLikeSystem={handleLikeSystem}
              />
            );
          })}
        {loadingMore === true && (
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        <View
          style={{
            alignItems: "center",
            marginTop: "2%",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#841584",
              width: "25%",
              alignItems: "center",
              paddingVertical: "3%",
              flex: 1,
              marginTop: "10%"
            }}
            onPress={() => loadMoreResults(pageNumber + 1)}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center"
              }}
            >
              Load More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const actions = {
  fetchTrendingMovieList,
  loadMoreResults,
  handleLikeSystem
};
const mapStateToProps = state => ({
  movieList: state.movies.movieList,
  fetchingList: state.movies.fetchingList,
  pageNumber: state.movies.pageNumber,
  loadingMore: state.movies.loadingMore
});
export default connect(
  mapStateToProps,
  actions
)(MovieList);
