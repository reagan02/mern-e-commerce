import PropTypes from "prop-types";

const Subtitle = (props) => {
	return (
		<div className="flex flex-row items-center ">
			<div className="bg-custom-red w-4 rounded xs:h-7 md:h-9"> </div>
			<p className="text-base md:text-lg xl:text-xl text-custom-red pl-4">
				<b>{props.subtitle}</b>
			</p>
		</div>
	);
};

export default Subtitle;
Subtitle.propTypes = {
	subtitle: PropTypes.string.isRequired,
};
