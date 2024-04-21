import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStarHalfAlt,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
import "./Homepage.css";
const Itemcard = (props) => {
  return (
    <div className="rounded border shadow-md xs:w-20 sm:w-24 md:w-32 lg:w-40 xl:w-56 lg:mt-3 xl:mt-5">
      <div className="relative ">
        <img className="w-full aspect-square" src={props.image} alt="" />
        <div className="absolute lg:mt-3  md:mt-2 md:ml-3 xs:mt-1 xs:ml-1 bg-orange-600 rounded-md top-0 ">
          <p className="xs:text-xs md:text-sm lg:text-base  text-white xs:px-1 py-1 sm:px-2">
            {props.discount}%
          </p>
        </div>
        <div className="absolute lg:mt-3 lg:mr-2 md:mt-2 xs:mr-1 xs:mt-1 top-0 right-0 grid gap-2 ">
          <div className="xs:size-3 md:size-5 lg:size-7 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="size-4 " />
          </div>
          <div className="xs:size-3 md:size-5 lg:size-7 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} className="size-4 " />
          </div>
        </div>
      </div>
      <div className="xs:mt-1 md:mt-2 lg:px-3 md:px-2 xs:px-1 ">
        <p className="xs:text-xs md:text-sm lg:text-base md:font-semibold mb-2">
          {props.name}
        </p>
        <p className="text-orange-600 xs:text-xs md:text-sm lg:text-base">{`₱ ${props.price.toLocaleString()}`}</p>
        <div className="flex flex-wrap xs:py-1 md:py-2 items-center">
          {Array(Math.floor(props.rating))
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-yellow-500 xs:size-2 md:size-3 lg:size-4"
              />
            ))}
          {props.rating % 1 !== 0 && (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-yellow-500 xs:size-2 md:size-3 lg:size-4"
            />
          )}
          <p className="xs:text-xs md:text-sm lg:text-base sm:pl-1 md:pl-2 ">{`(${props.rating})`}</p>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;

Itemcard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  rating: PropTypes.number,
};
