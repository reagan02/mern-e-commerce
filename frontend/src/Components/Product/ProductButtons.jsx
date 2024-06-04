import { useContext } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useNavigate } from "react-router-dom";

export const BuyButton = () => {
	const { orders } = useContext(ProductContext);
	const navigate = useNavigate();
	return (
		<button
			className="text-center md:text-lg lg:text-xl px-5 md:px-14 md:py-2 h-9 md:h-11 bg-custom-red text-white rounded-md"
			onClick={() => {
				console.log(orders);
				navigate("/checkout", {
					state: {
						orders: orders,
						fromCart: false,
					},
				});
			}}
		>
			Buy Now
		</button>
	);
};

export const CartButton = () => {
	return (
		<button className="border-2 rounded-md md:py-1 px-2 ">
			<FontAwesomeIcon
				icon={faCartShopping}
				className="size-6 md:size-7 xl:size-8"
			/>
		</button>
	);
};
