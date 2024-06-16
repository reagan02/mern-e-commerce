import { useContext } from "react";
import { CartContext } from "../../Context/Cart/CartContext";
import axios from "axios";
import { UseAuthContext } from "../../Hooks/Authentication/UseAuthContext";
const UpdateButton = () => {
	const { cart, setCart, isClicked, setIsClicked } = useContext(CartContext);
	const {
		state: { user },
	} = UseAuthContext();
	const userID = user?.user?._id;

	const handleUpdate = () => {
		setIsClicked(!isClicked);
		setCart((prev) => {
			const newCart = [...prev];
			newCart.map((product) => {
				product.checkbox = false;
				return product;
			});
			return newCart;
		});
	};

	const handleDelete = () => {
		const productIDs = cart
			.filter((product) => product.checkbox)
			.map((product) => product._id);

		const deleteProducts = async () => {
			try {
				await axios.post(`http://localhost:4000/api/cart/deleteSelectedItems`, {
					userID,
					productIDs,
				});

				setCart((prev) =>
					prev.filter((product) => !productIDs.includes(product._id))
				);
				alert("Deleted Successfully");
				setIsClicked(false);
			} catch (error) {
				console.error(
					"There has been a problem with your axios operation:",
					error
				);
			}
		};

		deleteProducts();
	};
	return (
		<div className="hidden md:flex justify-between">
			<button className="border border-black w-52 py-4">Return To Shop</button>
			<div className="flex gap-5 ">
				{isClicked && (
					<button
						className={`text-white bg-custom-red
            }-500 border border-black w-52 py-4`}
						onClick={handleDelete}
					>
						Delete
					</button>
				)}

				{/* Update Button */}
				<button
					onClick={handleUpdate}
					className={`${
						isClicked ? "bg-white" : "   text-white bg-custom-red"
					} border border-black w-52 py-4`}
				>
					{isClicked ? "Cancel" : "Update"}
				</button>
			</div>
		</div>
	);
};

export default UpdateButton;
