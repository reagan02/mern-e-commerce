import PropTypes from "prop-types";
const ItemList = (props) => {
  return (
    <div className="flex items-center w-full justify-between mb-8">
      <div className="flex items-center">
        <img src={props.image} alt="" className="size-14" />
        <div className="flex px-5">
          <p className="">{props.productName}</p>
          <p className="pl-2">({props.quantity})</p>
        </div>
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
  quantity: PropTypes.number.isRequired,
};
