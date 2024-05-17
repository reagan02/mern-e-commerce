import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const Category = (props) => {
	return (
		<a href="" className="hover:bg-custom-red hover:text-white ">
			<div className="border-2 xs:size-24 md:size-28 lg:size-36 flex flex-col items-center justify-evenly rounded">
				<FontAwesomeIcon
					icon={props.icon}
					className="xs:size-8 md:size-10 lg:size-14 "
				/>
				<p className="xs:text-sm md:text-sm ">{props.category}</p>
			</div>
		</a>
	);
};

export default Category;

Category.propTypes = {
	category: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
};
