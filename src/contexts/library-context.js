import { createContext, useState } from "react";
import { videoList } from "../data/mockDB";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState(videoList);
  return (
    <LibraryContext.Provider value={{ library, setLibrary }} >
      { children }
    </LibraryContext.Provider>
  )
}