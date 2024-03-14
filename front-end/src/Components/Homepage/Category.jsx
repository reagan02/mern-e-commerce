import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const Category = (props) => {
  return (
    <a href="">
      <div className="border-2 size-36 flex flex-col items-center justify-evenly rounded">
        <FontAwesomeIcon icon={props.icon} className="size-14 " />
        <p className="text-sm">{props.category}</p>
      </div>
    </a>
  );
};

export default Category;

Category.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
