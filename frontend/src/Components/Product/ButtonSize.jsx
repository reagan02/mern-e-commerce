import PropTypes from "prop-types";

const ButtonSize = (props) => {
	return <div className="border-2 rounded-md size-10">{props.size}</div>;
};

export default ButtonSize;

ButtonSize.propTypes = {
	size: PropTypes.string.isRequired,
};
