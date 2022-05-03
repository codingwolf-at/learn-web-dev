import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";

export const BackButton = ({ path }) => {
  return (
    <Link to={path}>
      <button className="btn">
        <FontAwesomeIcon icon={faHandPointLeft} size="lg" />
        <span>Go Back</span>
      </button>
    </Link>
  );
};

BackButton.propTypes = {
  path: PropTypes.string
}

BackButton.defaultProps = {
  path: "/"
};