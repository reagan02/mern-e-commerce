import { CartContext } from "./CartContext";
import PropTypes from "prop-types";
import { useState, useMemo } from "react";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const [updateCart, setUpdateCart] = useState([]);
	const totalPrice = useMemo(() => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				loading,
				setLoading,
				isClicked,
				setIsClicked,
				updateCart,
				setUpdateCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
