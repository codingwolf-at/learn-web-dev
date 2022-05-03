import { createContext, useReducer } from "react";
import { videoList } from "../data/mockDB";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  
  const libraryReducer = (state, action) => {
    switch (action.type) {
      case "SET_SORT_BY":
        return {
          ...state,
          sortBy: action.payload
        };
      case "LIKE_VIDEO":
        return {
          ...state,
          library: state.library.map(video => {
            if (video.videoId === action.payload) {
              return {
                ...video,
                liked: !video.liked
              }
            } return video;
          })
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(libraryReducer, { library: [...videoList], sortBy: "All" });

  return (
    <LibraryContext.Provider value={{ library: state.library, sortBy: state.sortBy, dispatch }}>
      { children }
    </LibraryContext.Provider>
  )
}