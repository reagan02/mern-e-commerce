import PropTypes from "prop-types";
const ProductTitle = (props) => {
	const data = props.data;

	return (
		<p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold">
			{data && data.name}
		</p>
	);
};

export default ProductTitle;

ProductTitle.propTypes = {
	data: PropTypes.object.isRequired,
};
