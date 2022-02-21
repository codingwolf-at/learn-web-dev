import { createContext } from "react";
import { videoList } from "../data/mockDB";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  return (
    <LibraryContext.Provider value={{ videoList }} >
      { children }
    </LibraryContext.Provider>
  )
}