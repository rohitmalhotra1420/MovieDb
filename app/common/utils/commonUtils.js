export const addLikeFlagToMovies = data => {
  data.forEach(element => {
    element["likeFlag"] = false;
  });
  return data;
};
