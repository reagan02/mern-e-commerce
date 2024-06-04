import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
import { useContext } from "react";
const PaymentMode = () => {
	const { selectedOption, setSelectedOption } = useContext(CheckoutContext);
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<>
			<div className="flex items-center py-5 text-sm sm:text-base md:text-lg ">
				<input
					type="radio"
					name="paymentMethod"
					value={"BANK"}
					className="size-5 rounded-full "
					checked={selectedOption === "BANK"}
					onChange={handleOptionChange}
				/>
				<p className="px-5">Bank </p>
			</div>
			<div className="flex items-center text-sm sm:text-base md:text-lg">
				<input
					type="radio"
					name="paymentMethod"
					value={"CASH_ON_DELIVERY"}
					className="size-5 rounded-full"
					checked={selectedOption === "CASH_ON_DELIVERY"}
					onChange={handleOptionChange}
				/>
				<p className="px-5 ">Cash On Delivery </p>
			</div>
		</>
	);
};

export default PaymentMode;
