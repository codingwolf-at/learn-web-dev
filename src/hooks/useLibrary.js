import { useContext } from "react";
import { LibraryContext } from "../contexts";

export const useLibrary = () => useContext(LibraryContext);