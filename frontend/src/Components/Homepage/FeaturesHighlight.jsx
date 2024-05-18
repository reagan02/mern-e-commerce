import PropTypes from "prop-types";
import Guarantee from "../../assests/Guarantee";
const FeaturesHighlight = () => {
	return (
		<div className=" md:my-10 sm:flex sm:flex-wrap sm:justify-between md:justify-evenly ">
			<Box
				title="FREE AND FAST DELIVERY"
				desc="Free delivery for all orders over $140"
			/>
			<Box title="MONEY BACK GUARANTEE" desc="We return money within 30 days" />
			<Box title="24/7 SUPPORT" desc="We are available 24/7, 7 days a week" />
		</div>
	);
};

export default FeaturesHighlight;

export const Box = (props) => {
	return (
		<div className="xs:py-5 md:py-2 flex flex-col items-center">
			<img
				src={Guarantee}
				alt=""
				className=" xs:size-10 sm:size-12 md:size-16 lg:size-20 rounded-full"
			/>

			<p className="xs:text-sm md:text-sm lg:text-base font-semibold py-2">
				{props.title}
			</p>

			<p className=" xs:text-xs lg:text-sm justify-center">{props.desc}</p>
		</div>
	);
};
Box.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};
