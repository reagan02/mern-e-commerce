import PropTypes from "prop-types";
const ItemList = (props) => {
  return (
    <div className="flex items-center w-full justify-between mb-8">
      <div className="flex items-center">
        <img src={props.image} alt="" className="size-14" />
        <p className="px-5">{props.productName}</p>
      </div>
      <p>$ {props.price}</p>
    </div>
  );
};

export default ItemList;
ItemList.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
