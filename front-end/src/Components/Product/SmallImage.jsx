import { PropTypes } from "prop-types";
const SmallImage = (props) => {
  return (
    <div className="w-36 border-2">
      <img
        src={props.image}
        alt=""
        className="h-28 w-full object-fill rounded-lg"
      />
    </div>
  );
};

export default SmallImage;

SmallImage.propTypes = {
  image: PropTypes.string,
};
