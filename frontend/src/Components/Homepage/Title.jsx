import PropTypes from "prop-types";

const Title = (props) => {
	return (
		<div className="flex items-end">
			<p className=" text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium flex items-center font-inter">
				{props.title}
			</p>
		</div>
	);
};

export default Title;

Title.propTypes = {
	title: PropTypes.string.isRequired,
};
