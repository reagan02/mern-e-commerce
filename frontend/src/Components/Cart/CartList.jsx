import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/Cart/CartContext";

const CartList = ({ index, stock, name, image, price, quantity }) => {
	const [productQuantity, setProductQuantity] = useState(quantity);
	const { cart, setCart, isClicked } = useContext(CartContext);

	const increment = () => {
		if (productQuantity < stock) {
			const newQuantity = productQuantity + 1;
			setProductQuantity(newQuantity);
			setCart((prev) => {
				const newCart = [...prev];
				newCart[index].quantity = newQuantity;
				newCart[index].subtotal = newCart[index].price * newQuantity;
				return newCart;
			});
		}
	};
	const decrement = () => {
		if (productQuantity > 1) {
			const newQuantity = productQuantity - 1;
			setProductQuantity(newQuantity);
			setCart((prev) => {
				const newCart = [...prev];
				newCart[index].quantity = newQuantity;
				newCart[index].subtotal = newCart[index].price * newQuantity;
				return newCart;
			});
		}
	};

	const handleCheck = (event, indexToCheck) => {
		let newCart = [...cart];
		newCart[indexToCheck].checkbox = event.target.checked;
		setCart(newCart);
	};

	return (
		<div className="flex ">
			{isClicked && (
				<input
					type="checkbox"
					checked={cart[index].checkbox}
					onChange={(event) => handleCheck(event, index)}
				/>
			)}
			<div className="items-center grid grid-cols-3 lg:grid-cols-4 lg:px-5 w-full  ">
				{/* Image */}
				<div className=" flex flex-col md:flex-row items-center lg:gap-0 gap-3 ">
					<img src={image} alt="" className="size-12 md:size-16" />
					<p>{name}</p>
				</div>
				{/* Price */}
				<p className="text-center text-lg ">
					&#8369;
					{price ? price.toLocaleString() : "0"}
				</p>

				{/* Quantity */}

				<div className="text-center">
					<p className="text-xs">
						<i>Stock Left: {stock}</i>
					</p>
					<div className=" flex justify-center text-lg">
						<button
							onClick={decrement}
							className="px-3 bg-custom-red text-white hover:bg-red-600"
						>
							-
						</button>
						<input
							className="outline-none w-10 text-center"
							value={productQuantity}
							readOnly
						/>
						<button
							onClick={increment}
							className="px-3 bg-custom-red text-white hover:bg-red-600"
						>
							+
						</button>
					</div>
				</div>

				{/* Subtotal */}
				<p className=" text-right text-lg hidden lg:block">
					&#8369;
					{price && quantity ? (price * quantity).toLocaleString() : "0"}
				</p>
			</div>
		</div>
	);
};

export default CartList;

CartList.propTypes = {
	index: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
};
