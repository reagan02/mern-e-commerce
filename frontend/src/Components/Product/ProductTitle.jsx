import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useContext } from "react";
const ProductTitle = () => {
	const { productData } = useContext(ProductContext);

	return (
		<p className="text-lg md:text-xl lg:text-2xl font-inter font-semibold">
			{productData && productData.name}
		</p>
	);
};

export default ProductTitle;
