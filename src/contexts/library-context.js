import { createContext, useReducer, useEffect } from "react";
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
        };
      case "UPDATE_FROM_LOCAL_STORAGE":
        return {
          ...state,
          library: action.payload
        }
      default:
        return state;
    };
  };

  const [{ library, sortBy }, dispatch] = useReducer(libraryReducer, { library: [...videoList], sortBy: "All" });

  useEffect(() => {
    const libraryData = JSON.parse(localStorage.getItem('library'));
    if (libraryData.length > 0) {
      dispatch({ type: "UPDATE_FROM_LOCAL_STORAGE", payload: libraryData });
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library])


  return (
    <LibraryContext.Provider value={{ library, sortBy, dispatch }}>
      { children }
    </LibraryContext.Provider>
  )
}