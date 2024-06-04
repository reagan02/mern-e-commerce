import { useContext } from "react";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import PropTypes from "prop-types";
const ColorsOrVariants = (props) => {
	const {
		productData,
		variantIndex,
		setVariantIndex,
		colorIndex,
		setColorIndex,
		setQuantity,
	} = useContext(ProductContext);
	return (
		<div className="flex py-3 items-center ">
			<p className="text-base md:text-lg xl:text-xl">{props.name}:</p>
			<div className="flex flex-wrap gap-2 pl-2">
				{props.name === "Colors" &&
					productData &&
					productData.color &&
					productData.color.map((color, index) => (
						<button
							key={index}
							className={`border-2  ${
								colorIndex === index ? "bg-custom-red text-white " : "border"
							} px-2 md:px-3 py-1 md:text-base text-sm rounded-md`}
							onClick={() => {
								setColorIndex(index);
							}}
						>
							{color}
						</button>
					))}
				{props.name === "Sizes" &&
					productData &&
					productData.variants &&
					productData.variants.map((variant, index) => (
						<button
							key={index}
							className={`border-2  ${
								variantIndex === index ? "bg-custom-red text-white " : "border"
							} px-2 md:px-3 py-1 md:text-base text-sm rounded-md`}
							onClick={() => {
								setVariantIndex(index);
								setQuantity(1);
							}}
						>
							{variant.size}
						</button>
					))}
			</div>
		</div>
	);
};
ColorsOrVariants.propTypes = {
	name: PropTypes.string,
};

export default ColorsOrVariants;
