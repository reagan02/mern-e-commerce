import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart/CartContext";
import { useContext } from "react";
const PlaceOrderButton = () => {
	const { cart } = useContext(CartContext);
	const navigate = useNavigate();
	const placeOrderHandler = () => {
		navigate("/checkout", { state: { orders: cart, fromCart: true } });
	};
	return (
		<button
			onClick={placeOrderHandler}
			className="border border-black rounded-md text-sm text-white bg-custom-red  py-2 sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:py-2.5 lg:text-lg"
		>
			Proceed to Checkout
		</button>
	);
};

export default PlaceOrderButton;
