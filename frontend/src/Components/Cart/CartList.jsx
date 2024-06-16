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
					className="border border-black"
					checked={cart[index].checkbox}
					onChange={(event) => handleCheck(event, index)}
				/>
			)}
			<div className="items-center md:grid md:grid-cols-5 lg:grid-cols-4 px-3 lg:px-5 hidden w-full border border-black">
				{/* Image */}
				<div
					className=" flex items-center md:col-span
      -2 lg:col-span-1 border"
				>
					<img src={image} alt="" className="border-2 size-16" />
					<p>{name}</p>
				</div>
				{/* Price */}
				<p className="text-center border text-lg ">
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
				<p className="border text-right  text-lg">
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
