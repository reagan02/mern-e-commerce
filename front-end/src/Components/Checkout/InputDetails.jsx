import PropTypes from "prop-types";
const InputDetails = (props) => {
	return (
		<div className="py-2.5 w-full">
			<p className="text-sm sm:text-base md:text-lg">{props.title}</p>
			<input
				type={props.type}
				readOnly={props.readOnly}
				value={props.value}
				onChange={props.onChange}
				className="h-8 sm:h-10 md:h-11 rounded-md bg-gray-200 w-full  pl-2 outline-none text-sm sm:text-base md:text-lg"
			/>
		</div>
	);
};

export default InputDetails;

InputDetails.propTypes = {
	title: PropTypes.string.isRequired, // The title of the input field
	type: PropTypes.string, // The type of the input field
	readOnly: PropTypes.bool, // Whether the input field is read only
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired, // The function to call when the input field changes
};
// Default props for the input field
InputDetails.defaultProps = {
	readOnly: false, // Default is not read only
	type: "text", // Default type is text
	value: "", // Default value is empty string
};
