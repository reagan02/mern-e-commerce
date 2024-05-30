import PropTypes from "prop-types";

const Button = (props) => {
	return (
		<button
			className={`size-9 md:size-10 lg:size-11  xl:size-12 lg:text-2xl xl:text-3xl lg:hover:text-white lg:hover:bg-custom-red lg:border border-black bg-custom-red lg:bg-transparent ${props.position}`}
		>
			{props.children}
		</button>
	);
};
Button.propTypes = {
	children: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
};

const QuantityInput = () => {
	return (
		<div className="flex ">
			<Button position="rounded-s-md">-</Button>
			<input
				type="number"
				className="border w-14 md:w-20 text-base md:text-2xl border-black h-9 md:h-10 lg:h-11 xl:h-12 text-center"
			/>
			<Button position="rounded-e-md">+</Button>
		</div>
	);
};

export default QuantityInput;
