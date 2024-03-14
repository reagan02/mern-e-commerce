import PropTypes from "prop-types";
const Aboutcard = (props) => {
  return (
    <div className="border-2 rounded-md flex flex-col justify-between py-10 items-center size-80">
      <img src={props.image} alt="" className="size-20" />
      <p className="text-4xl font-bold">{props.number}k</p>
      <p className="text-xl">{props.context}</p>
    </div>
  );
};

export default Aboutcard;

Aboutcard.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  context: PropTypes.string.isRequired,
};
