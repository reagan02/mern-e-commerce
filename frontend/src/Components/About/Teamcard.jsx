import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Teamcard = (props) => {
  return (
    <div className="mt-24 mb-5">
      <img src={props.image} alt="" />
      <p className="text-3xl font-inter font-semibold mt-10">{props.name}</p>
      <p className="py-5">{props.position}</p>
      <div className="flex gap-5">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
    </div>
  );
};

export default Teamcard;

Teamcard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
