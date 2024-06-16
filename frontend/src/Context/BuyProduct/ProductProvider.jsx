import { useState, useMemo } from "react";
import { ProductContext } from "./ProductContext";
import PropTypes from "prop-types";

const ProductProvider = ({ children }) => {
	const [productData, setProductData] = useState(null);
	const [variantIndex, setVariantIndex] = useState(0);
	const [colorIndex, setColorIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const orders = useMemo(
		() => ({
			productData: productData,
			productID: productData && productData._id,
			productName: productData && productData.name,
			size:
				productData &&
				productData.variants &&
				productData.variants[variantIndex].size,
			color: productData && productData.color && productData.color[colorIndex],
			price:
				productData &&
				productData.variants &&
				productData.variants[variantIndex].price,
			variantIndex: variantIndex,
			quantity: quantity,
			image: productData && productData.images && productData.images[0],
			subtotal:
				productData && productData.variants[variantIndex].price * quantity,
		}),
		[productData, variantIndex, colorIndex, quantity]
	);

	return (
		<ProductContext.Provider
			value={{
				productData,
				setProductData,
				variantIndex,
				setVariantIndex,
				quantity,
				setQuantity,
				colorIndex,
				setColorIndex,
				orders,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
