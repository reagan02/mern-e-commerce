import PropTypes from "prop-types";

const ButtonSize = (props) => {
  return <button className="border-2 rounded-md size-10">{props.size}</button>;
};

export default ButtonSize;

ButtonSize.propTypes = {
  size: PropTypes.string.isRequired,
};
