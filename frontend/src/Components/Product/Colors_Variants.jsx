import { useState } from "react";
import PropTypes from "prop-types";
const ColorsOrVariants = (props) => {
	const { data, name } = props;
	const [variantIndex, setVariantIndex] = useState(0); // color
	const [colorIndex, setColorIndex] = useState(0); // size

	return (
		<div className="flex py-3 items-center ">
			<p className="text-base md:text-lg xl:text-xl"> Colors:</p>
			<div className="flex flex-wrap gap-2 pl-2">
				{name === "Colors" &&
					data &&
					data.color &&
					data.color.map((color, index) => (
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
				{name === "Sizes" &&
					data &&
					data.variants &&
					data.variants.map((variant, index) => (
						<button
							key={index}
							className={`border-2  ${
								variantIndex === index ? "bg-custom-red text-white " : "border"
							} px-2 md:px-3 py-1 md:text-base text-sm rounded-md`}
							onClick={() => {
								setVariantIndex(index);
							}}
						>
							{variant.size}
						</button>
					))}
			</div>
		</div>
	);
};

export default ColorsOrVariants;

ColorsOrVariants.propTypes = {
	data: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
};
