import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Arrow = (props) => {
	return (
		<div className="hidden lg:flex items-center justify-end grow">
			<button onClick={props.previous}>
				<FontAwesomeIcon icon={faArrowLeft} className="size-5 pr-3" />
			</button>
			<button onClick={props.next}>
				<FontAwesomeIcon icon={faArrowRight} className="size-5 " />
			</button>
		</div>
	);
};

export default Arrow;

Arrow.propTypes = {
	previous: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
};
