import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { useState } from "react";
const CartList = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleQuantity = (e) => {
    setQuantity(quantity);
  };
  return (
    <div className="w-full my-5 shadow-md flex items-center py-1">
      <div className="w-1/4 flex items-center">
        <img src={props.image} alt="" className="border-2 size-16" />
        <p>{props.name}</p>
      </div>
      {/* Price */}
      <p className="w-1/4 ">{props.price}</p>

      {/* Quantity */}
      <div className="w-1/4 flex h-11">
        <div className="flex items-center rounded border-2">
          <input
            type="number"
            className="outline-none w-10"
            value={quantity}
            onChange={handleQuantity}
          />
          <div className="flex flex-col"></div>
        </div>
      </div>

      {/* Subtotal */}
      <p className="w-1/4 ">{props.price * props.quantity}</p>
    </div>
  );
};

export default CartList;

CartList.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
