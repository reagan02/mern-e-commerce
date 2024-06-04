import CheckoutButton from "./CheckoutButton";
import { useContext } from "react";
import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
const Coupon = () => {
	const { appliedCoupon, setAppliedCoupon } = useContext(CheckoutContext);

	return (
		<div className="flex justify-between gap-2 lg:gap-2 my-4">
			<input
				value={appliedCoupon}
				type="text"
				placeholder="Coupon Code"
				className="text-sm border border-black lg:py-2.5 rounded-md pl-2 sm:pl-3 md:pl-4 lg:flex-grow xl:flex-grow-0 xl:w-80"
				onChange={(e) => setAppliedCoupon(e.target.value)}
				maxLength={8}
				pattern="[A-Za-z0-9]"
			/>
			<CheckoutButton title="Apply Coupon" />
		</div>
	);
};

export default Coupon;
