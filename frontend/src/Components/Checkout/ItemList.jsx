import PropTypes from "prop-types";
const ItemList = ({ image, productName, price, quantity }) => {
	return (
		<div className="flex items-center w-full justify-between mb-5 md:mb-8  text-sm sm:text-base md:text-lg">
			<div className="flex items-center flex-shrink">
				<img src={image} alt="" className="size-14" />

				<p className="line-clamp-1 px-5">{productName}</p>
				<p className="pl-0 sm:pl-1 md:pl-2 ">({quantity})</p>
			</div>
			<p className="ml-10 flex-shrink-0 ">₱ {price}</p>
		</div>
	);
};

export default ItemList;
ItemList.propTypes = {
	image: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
};
