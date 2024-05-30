import React from "react";
import PropTypes from "prop-types";
const ProductDesc = (props) => {
	const data = props.data;
	return (
		<p className="py-5 md:text-base text-sm">
			{/* Desciprtion */}
			{data && data.description}
		</p>
	);
};

export default ProductDesc;

ProductDesc.propTypes = {
	data: PropTypes.object.isRequired,
};
