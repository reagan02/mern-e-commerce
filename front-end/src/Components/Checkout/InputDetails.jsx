import PropTypes from "prop-types";
const InputDetails = (props) => {
  return (
    <div className="py-2.5">
      <h1>{props.title}</h1>
      <input
        type={props.type}
        className="h-10 text-xl rounded-md bg-gray-200 w-full"
      />
    </div>
  );
};

export default InputDetails;

InputDetails.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

InputDetails.defaultProps = {
  type: "text",
};
