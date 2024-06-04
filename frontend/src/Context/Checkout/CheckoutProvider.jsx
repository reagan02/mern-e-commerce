import { useState } from "react";
import { CheckoutContext } from "./CheckoutContext";
import PropTypes from "prop-types";
const CheckoutProvider = ({ children }) => {
	const [orderData, setOrderData] = useState(null);
	const [subTotal, setSubTotal] = useState(0);
	const [appliedCoupon, setAppliedCoupon] = useState("");
	const [totalPrice, setTotalPrice] = useState(0);
	const [selectedOption, setSelectedOption] = useState("BANK");
	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		streetAddress: "",
		optionalAddress: "",
		townCity: "",
		phoneNumber: "",
		email: "",
	});
	const shippingFee = 100;
	const orderSummary = {
		orderData: orderData,
		totalPrice: totalPrice,
		subTotalPrice: subTotal,
		shippingFee: shippingFee,
		coupon: appliedCoupon,
		selectedOption: selectedOption,
		userDetails: userDetails,
	};
	return (
		<>
			<CheckoutContext.Provider
				value={{
					orderData,
					setOrderData,
					subTotal,
					setSubTotal,
					appliedCoupon,
					setAppliedCoupon,
					totalPrice,
					setTotalPrice,
					orderSummary,
					selectedOption,
					setSelectedOption,
					userDetails,
					setUserDetails,
				}}
			>
				{children}
			</CheckoutContext.Provider>
		</>
	);
};

export default CheckoutProvider;

CheckoutProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
