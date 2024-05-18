import PropTypes from "prop-types";
const ItemList = (props) => {
	return (
		<div className="flex items-center w-full justify-between mb-5  md:mb-8">
			<div className="flex items-center">
				<img src={props.image} alt="" className="size-14" />
				<div className="flex px-5 text-sm sm:text-base md:text-lg ">
					<p className="">{props.productName}</p>
					<p className="pl-0 sm:pl-1 md:pl-2  ">({props.quantity})</p>
				</div>
			</div>
			<p className="text-sm sm:text-base md:text-lg">₱ {props.price}</p>
		</div>
	);
};

export default ItemList;
ItemList.propTypes = {
	image: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
};
