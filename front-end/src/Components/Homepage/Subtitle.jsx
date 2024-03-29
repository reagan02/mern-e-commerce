import PropTypes from "prop-types";

const Subtitle = (props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="bg-orange-600 w-4 rounded h-9"> </div>
      <p className="text-xl text-orange-600 pl-4">
        <b>{props.subtitle}</b>
      </p>
    </div>
  );
};

export default Subtitle;
Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
