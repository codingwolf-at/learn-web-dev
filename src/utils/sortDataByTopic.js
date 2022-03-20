export const sortDataByTopic = (library, sortBy) => {
  if (sortBy === "All") {
    return library;
  }
  return library.filter(video => video.topic === sortBy);
};