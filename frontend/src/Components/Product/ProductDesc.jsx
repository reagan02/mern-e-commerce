import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useContext } from "react";
const ProductDesc = () => {
	const { productData } = useContext(ProductContext);
	return (
		<p className="py-5 md:text-base text-sm">
			{/* Desciprtion */}
			{productData && productData.description}
		</p>
	);
};

export default ProductDesc;
