import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div
      style={{ width: `${props.width}rem`, height: `${props.height}rem` }}
      className={`${props.bgColor} ${props.border} rounded-sm flex justify-center items-center`}
    >
      <p
        style={{ fontSize: `${props.textSize}rem` }}
        className={`text-xl ${props.textColor} p-5`}
      >
        {props.title}
      </p>
    </div>
  );
};

Button.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  textSize: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "bg-orange-600",
  textColor: "text-white",
  border: "border-0",
};

export default Button;
