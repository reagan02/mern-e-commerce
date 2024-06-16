import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const DropDownList = ({ icon, text, handleClick }) => {
	return (
		<button
			onClick={handleClick}
			className="flex items-center gap-3 p-2 sm:gap-4 sm:px-4 md:px-5 md:py-3 lg:py-3.5 "
		>
			<FontAwesomeIcon icon={icon} className="size-4 md:size-5" />
			<p className="text-xs sm:text-sm md:text-base whitespace-nowrap">
				{text}
			</p>
		</button>
	);
};

export default DropDownList;

DropDownList.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
};
