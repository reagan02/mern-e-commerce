import PropTypes from "prop-types";

const OrderLabel = ({ name, value }) => {
	return (
		<div className="flex justify-between text-sm sm:text-base md:text-lg">
			<p>{name}:</p>
			<p>₱ {value.toLocaleString()}</p>
		</div>
	);
};

export default OrderLabel;

OrderLabel.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};
