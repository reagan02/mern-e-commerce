import React from "react";
import PropTypes from "prop-types";
const ProductPrice = (props) => {
	const { data, variantIndex } = props;

	return (
		<p className="font-inter text-lg md:text-xl lg:text-2xl">
			{data &&
				data.variants &&
				`₱${data.variants[variantIndex].price.toLocaleString()}`}
		</p>
	);
};

export default ProductPrice;

ProductPrice.propTypes = {
	data: PropTypes.object.isRequired,
	variantIndex: PropTypes.number.isRequired,
};
