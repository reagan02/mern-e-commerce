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

// View Products Button
export const ViewButton = () => {
  return (
    <div className=" text-white bg-orange-500 xs:py-2 md:py-3 lg:px-16 md:px-12 sm:px-10 xs:px-6 md:text-base xs:text-sm">
      View All Products
    </div>
  );
};

// View Products Short Button
export const ViewButton2 = () => {
  return (
    <div className="text-white bg-orange-500 xs:text-sm sm:text-base xs:px-4 xs:py-2 sm:px-8 sm:py-2 md:px-10 md:py-3 rounded ">
      View All
    </div>
  );
};
