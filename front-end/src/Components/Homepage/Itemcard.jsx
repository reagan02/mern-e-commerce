import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

const Itemcard = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-56">
      <div className="relative border-2">
        <img className="object-cover size-48" src={props.image} alt="" />
        <div className="absolute mt-3 ml-3 bg-orange-600 rounded-md top-0 ">
          <p className="text-sm text-white py-1 px-2">{props.discount}</p>
        </div>
        <div className="absolute mt-3 mr-2 top-0 right-0 grid gap-2 ">
          <div className="size-7 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="size-4 " />
          </div>
          <div className="size-7 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} className="size-4 " />
          </div>
        </div>
      </div>
      <div className="mt-2 px-3 ">
        <div className="font-semibold text-sm mb-2">{props.name}</div>
        <p className=" text-orange-600 text-base">{props.price}</p>

        <div className="flex py-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500  size-4" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500  size-4" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500  size-4" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500  size-4" />
        </div>
      </div>
    </div>
  );
};

export default Itemcard;

Itemcard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
};
