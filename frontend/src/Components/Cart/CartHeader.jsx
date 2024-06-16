import { useContext } from "react";
import { CartContext } from "../../Context/Cart/CartContext";
const CartHeader = () => {
	const { setCart, isClicked } = useContext(CartContext);
	const handleUpdate = () => {
		setCart((prev) => {
			const newCart = prev.map((product) => {
				return { ...product, checkbox: !product.checkbox };
			});
			return newCart;
		});
	};
	return (
		<div className="hidden lg:flex ">
			{isClicked && <input type="checkbox" onChange={handleUpdate} />}
			<div className="grid md:grid-cols-5 lg:grid-cols-4 text-sm lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4  border-2 shadow-md rounded-md w-full ">
				<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
				<p className="text-center">Price</p>
				<p className="text-center ">Quantity</p>
				<p className="text-right ">Subtotal</p>
			</div>
		</div>
	);
};

export default CartHeader;
