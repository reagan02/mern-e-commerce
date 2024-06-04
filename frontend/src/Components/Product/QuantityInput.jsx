import PropTypes from "prop-types";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useContext } from "react";

const QuantityInput = () => {
	const { quantity, setQuantity, productData, variantIndex } =
		useContext(ProductContext);

	const stock =
		productData &&
		productData.variants &&
		productData.variants[variantIndex].stock;
	const increment = () => {
		if (quantity === stock) {
			return;
		}
		setQuantity(quantity + 1);
	};
	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div className="flex ">
			<Button position="rounded-s-md" updateQuantity={decrement}>
				-
			</Button>
			<input
				type="text"
				inputMode="numeric"
				disabled
				className="border w-14 md:w-20 text-base md:text-2xl border-black h-9 md:h-10 lg:h-11 xl:h-12 text-center"
				value={quantity}
			/>
			<Button position="rounded-e-md" updateQuantity={increment}>
				+
			</Button>
		</div>
	);
};

export default QuantityInput;

const Button = (props) => {
	return (
		<button
			className={`size-9 md:size-10 lg:size-11  xl:size-12 lg:text-2xl xl:text-3xl lg:hover:text-white lg:hover:bg-custom-red lg:border border-black bg-custom-red lg:bg-transparent ${props.position}`}
			onClick={props.updateQuantity}
		>
			{props.children}
		</button>
	);
};
Button.propTypes = {
	children: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	updateQuantity: PropTypes.func,
};
