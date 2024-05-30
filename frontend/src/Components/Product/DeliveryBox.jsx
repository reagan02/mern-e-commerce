import deliver from "../../assets/icon-delivery.png";
import iconreturn from "../../assets/Icon-return.png";
import PropTypes from "prop-types";

const DeliveryBox = () => {
	return (
		<div className="flex flex-wrap lg:justify-normal justify-between lg:flex-nowrap lg:flex-col gap-2 py-4">
			<Box
				src={deliver}
				title="Free Delivery"
				text="Enter your postal code for Delivery Availability"
			/>
			<Box
				src={iconreturn}
				title="Return Delivery"
				text="Free 30 Days Delivery Returns. Details"
			/>
		</div>
	);
};

export default DeliveryBox;

const Box = (props) => {
	return (
		<div className="border-2 px-3 py-1 flex gap-2 items-center border-black">
			<img src={props.src} alt="" className="size-8 xl:size-10" />
			<div className="xl:text-base text-sm">
				<p>{props.title}</p>
				<p>{props.text}</p>
			</div>
		</div>
	);
};

Box.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
