import { useLibrary } from "../../hooks"
import "./Chip.css";

export const Chip = ({ text }) => {
  const { sortBy, dispatch } = useLibrary();
  
  const chipHandler = () => {
    dispatch({ type: "SET_SORT_BY", payload: text });
  }
  
  return (
    <span className={sortBy === text ? "chip-light" : "chip-dark"} onClick={chipHandler}>
      {text}
    </span>
  );
};