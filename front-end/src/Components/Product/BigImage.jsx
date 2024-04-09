import PropTypes from "prop-types";
const BigImage = (props) => {
  return (
    <div className="w-full border-2" style={{ height: 500 }}>
      <img src={props.image} alt="" className="object-fill size-full" />
    </div>
  );
};

export default BigImage;
BigImage.propTypes = {
  image: PropTypes.string,
};
