// LoadingSpinner.jsximport React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
const LoadingSpinner = (props) => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<ClipLoader color={props.color} size={props.size} />
		</div>
	);
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
};

LoadingSpinner.defaultProps = {
	color: "#000000",
	size: 250,
};
