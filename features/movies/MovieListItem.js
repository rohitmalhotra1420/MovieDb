import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
class MovieListItem extends Component {
  state = {};
  handleLikeSystem = id => () => {
    this.props.handleLikeSystem(id);
  };
  render() {
    const { movieItem } = this.props;
    return (
      <View
        style={{
          marginHorizontal: "3%",
          elevation: 2,
          borderRadius: 5,
          marginBottom: 20
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`
            }}
            resizeMode="stretch"
            style={{ width: null, height: 400 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "2%"
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {movieItem.title}
            </Text>
          </View>
          {movieItem.likeFlag === false ? (
            <TouchableOpacity onPress={this.handleLikeSystem(movieItem.id)}>
              <Text>Like</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.handleLikeSystem(movieItem.id)}>
              <Text>UnLike</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginHorizontal: "2%", marginBottom: "5%" }}>
          <Text style={{ color: "gray" }}>{movieItem.overview}</Text>
        </View>
      </View>
    );
  }
}

export default MovieListItem;
