import { useContext } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductContext } from "../../Context/BuyProduct/ProductContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuthContext } from "../../Hooks/Authentication/UseAuthContext";

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
	const {
		state: { user },
	} = UseAuthContext();
	const { orders } = useContext(ProductContext);

	const addToCart = async () => {
		try {
			await axios.post("http://localhost:4000/api/cart", {
				userID: user.user._id,
				productData: orders,
			});

			alert("Added to cart successfully");
		} catch (error) {
			console.log(error);
			alert("Error adding to cart");
		}
	};
	return (
		<button className="border-2 rounded-md md:py-1 px-2 " onClick={addToCart}>
			<FontAwesomeIcon
				icon={faCartShopping}
				className="size-6 md:size-7 xl:size-8"
			/>
		</button>
	);
};
