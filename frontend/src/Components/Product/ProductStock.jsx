import { useContext } from "react";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";

const ProductStock = () => {
	const { productData, variantIndex } = useContext(ProductContext);

	return (
		<div className="flex justify-start py-3 tracking-widest ">
			<p className="text-sm md:text-base">
				{productData &&
					productData.variants &&
					productData.variants[variantIndex].stock}
			</p>
			<p className="text-sm md:text-base"> |</p>
			<p className="text-sm md:text-base"> In Stock</p>
		</div>
	);
};

export default ProductStock;
