import { CartContext } from "../../Context/Cart/CartContext";
import { useContext } from "react";
import CheckoutButton from "../Checkout/CheckoutButton";
import PlaceOrderButton from "./PlaceOrderButton";
const PlaceOrder = () => {
	const SHIPPING_FEE = 100;
	const { totalPrice } = useContext(CartContext);
	return (
		<div className="flex md:justify-between flex-col gap-3 md:flex-row  py-5 lg:py-8 mt-5">
			{/* coupon and proceed to checkout */}
			<div className="flex justify-between gap-3 md:flex-wrap md:justify-normal flex-nowrap md:h-24 h-12">
				<input
					type="text"
					placeholder="Coupon Code"
					className="text-sm border border-black md:h-11 rounded-md pl-2 w-auto sm:pl-3 md:pl-4 md:w-48 lg:w-60 xl:w-80 lg:text-lg"
				/>
				{/* <Button title="Apply Coupon" function={toggleCoupon} /> */}
			</div>
			<div className="border border-black p-2 md:p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 md:w-1/2 xl:w-2/5">
				<p className="md:text-lg xl:text-xl font-semibold">Cart Total</p>
				<div className="flex flex-col gap-2 md:gap-3 md:gap-">
					<div className="flex justify-between">
						<p>SubTotal: </p>
						<p>₱ {totalPrice.toLocaleString()}</p>
					</div>
					<hr className="border border-black" />
					<div className="flex justify-between">
						<p>Shipping: </p>
						<p>₱ {SHIPPING_FEE}</p>
					</div>
					<hr className="border border-black" />
					<div className="flex justify-between">
						<p>Total: </p>
						<p>₱ {(totalPrice + SHIPPING_FEE).toLocaleString()}</p>
					</div>
				</div>

				<div className="text-right">
					<PlaceOrderButton />
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
