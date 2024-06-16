import { useEffect, useState, useContext } from "react";
import axios from "axios";
import CartList from "./CartList";
import { CartContext } from "../../Context/Cart/CartContext";
import LoadingSpinner from "../../LoadingDisplay/LoadingSpinner";

const DisplayCart = () => {
	const { cart, loading, setCart } = useContext(CartContext);

	const [stock, setStock] = useState([]);
	const [stockLoading, setStockLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			if (cart) {
				setStockLoading(true);
				const stocks = await Promise.all(
					cart.map(async (product) => {
						const response = await axios.get(
							`http://localhost:4000/api/cart/products/${product.productID}/variants/${product.variantIndex}`
						);
						return response.data.stock;
					})
				);
				setStock(stocks);
				const updatedProducts = cart.map((product) => ({
					...product,
					checkbox: false,
				}));
				setCart(updatedProducts);
				setStockLoading(false);
			}
		};
		fetchData();
	}, [loading]);
	return (
		<div>
			{stockLoading ? (
				<div className="text-center">
					<LoadingSpinner />
				</div>
			) : (
				<div className=" max-h-[500px] overflow-auto flex flex-col gap-5">
					{cart &&
						cart.map((product, index) => (
							<div key={`${product.productID}-${index}`}>
								{stock[index] !== undefined && (
									<CartList
										index={index}
										stock={stock[index]}
										name={product.productName}
										price={product.price}
										quantity={cart[index].quantity}
										image={product.image || ""}
									/>
								)}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default DisplayCart;
