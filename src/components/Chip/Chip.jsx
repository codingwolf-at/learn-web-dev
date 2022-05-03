import { useLibrary } from "../../hooks"
import "./Chip.css";
import PropTypes from 'prop-types';

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

Chip.propTypes = {
  text: PropTypes.string.isRequired
}