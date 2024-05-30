import React from "react";
import PropTypes from "prop-types";
const ProductStock = (props) => {
	const { data, variantIndex } = props;
	return (
		<div className="flex justify-start py-3 tracking-widest ">
			<p className="text-sm md:text-base">
				{data && data.variants && data.variants[variantIndex].stock}
			</p>
			<p className="text-sm md:text-base"> |</p>
			<p className="text-sm md:text-base"> In Stock</p>
		</div>
	);
};

export default ProductStock;

ProductStock.propTypes = {
	data: PropTypes.object.isRequired,
	variantIndex: PropTypes.number.isRequired,
};
