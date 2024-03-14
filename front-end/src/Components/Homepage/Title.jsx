import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <div className="flex items-end">
      <p className="text-3xl font-medium flex items-center font-inter">
        {props.title}
      </p>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
