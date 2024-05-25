import PropTypes from "prop-types";
const LoginInputs = (props) => {
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			className="text-base md:text-lg xl:text-xl w-full outline-none  "
			value={props.value}
			onChange={props.function}
		/>
	);
};
export default LoginInputs;

LoginInputs.propTypes = {
	type: PropTypes.oneOf(["text", "number", "password"]).isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	function: PropTypes.func.isRequired,
};
