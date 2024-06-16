import PropTypes from "prop-types";
import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
import { useContext } from "react";
const CheckoutButton = ({ title }) => {
	const { orderSummary } = useContext(CheckoutContext);
	const handlePlaceOrder = () => {
		console.log(orderSummary);
	};
	return (
		<button
			onClick={handlePlaceOrder}
			className="border border-black rounded-md text-sm text-white bg-custom-red  py-2 sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:py-2.5 lg:text-lg"
		>
			{title}
		</button>
	);
};

export default CheckoutButton;

CheckoutButton.propTypes = {
	title: PropTypes.string.isRequired,
};
