import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useContext } from "react";
const ProductPrice = () => {
	const { productData, variantIndex } = useContext(ProductContext);
	return (
		<p className="font-inter text-lg md:text-xl lg:text-2xl">
			{productData &&
				productData.variants &&
				`₱${productData.variants[variantIndex].price.toLocaleString()}`}
		</p>
	);
};

export default ProductPrice;
