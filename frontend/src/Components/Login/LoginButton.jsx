import PropTypes from "prop-types";

const Button = (props) => {
	return (
		<button
			className={`${props.bgColor} ${props.textColor}  xs:text-base lg:text-lg xl:text-xl w-full py-2.5 md:py-3 rounded-md border-2`}
			type={props.type}
		>
			{props.title}
		</button>
	);
};
export default Button;
Button.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};
Button.defaultProps = {
	type: "button",
	bgColor: "bg-custom-red",
	textColor: "text-white",
};
