import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Cart.css";

const Cart = () => {
	const [cart, setCart] = useState({ id: "", userID: "", products: [] });
	const [total, setTotal] = useState(0);
	const shippingFee = 150;
	const userID = sessionStorage.getItem("userID");
	const [isClicked, setIsClicked] = useState(false);
	const [updateCart, setUpdateCart] = useState({
		updateCart: false,
		updateCartText: "Update Cart",
	});
	const [stock, setStock] = useState([]);
	const [checkedValuesIndex, setCheckedValuesIndex] = useState([]); // Array to store the checked values
	const toggleCheckbox = (event, index) => {
		setSelectAll(false);
		if (event.target.checked) {
			setCheckedValuesIndex((prev) => [...prev, index]);
			return;
		}
		setCheckedValuesIndex((prev) => prev.filter((item) => item !== index));
	};
	const [selectAll, setSelectAll] = useState(false);
	// Function to handle select all checkbox change
	const toggleSelectAll = (event) => {
		if (event.target.checked) {
			setSelectAll(!selectAll);
			setCheckedValuesIndex([...Array(cart.products.length).keys()]); // Check all the checkboxes
			return;
		}
		setSelectAll(!selectAll); // Uncheck the "Select All" checkbox
		setCheckedValuesIndex([]); // Uncheck all the checkboxes
	};

	// Function of update cart button
	const handleUpdateCart = () => {
		setSelectAll(!selectAll);
		setCheckedValuesIndex([]);
		setIsClicked(!isClicked);
		setUpdateCart({
			updateCart: !updateCart.updateCart,
			updateCartText: updateCart.updateCart ? "Update Cart" : "Cancel",
		});
	};

	const toggleCoupon = () => {
		//console.log(stock);
	};
	const deleteCart = async () => {
		const checkedCartItems = checkedValuesIndex.map(
			(index) => cart.products[index]
		); // Get the checked cart items

		const userID = sessionStorage.getItem("userID");
		for (let i = 0; i < checkedCartItems.length; i++) {
			if (checkedCartItems[i]) {
				const productID = checkedCartItems[i]._id;
				try {
					await axios.delete(
						`http://localhost:4000/api/cart/${productID}?userID=${userID}`
					);
					setCart((prev) => {
						return {
							...prev,
							products: prev.products.filter(
								(product) => product._id !== productID
							),
						};
					});
					setUpdateCart({
						updateCart: false,
						updateCartText: "Update Cart",
					});
				} catch {
					alert("Error deleting item");
				}
			}
		}
		alert("Item deleted successfully");
	};

	const increment = (index) => {
		if (cart.products[index].quantity < stock[index]) {
			setCart((prev) => {
				const newCart = { ...prev };
				newCart.products[index].quantity = newCart.products[index].quantity + 1;
				let newTotal = 0;
				newCart.products.forEach((product) => {
					newTotal += product.price * product.quantity;
				});
				setTotal(newTotal);
				return newCart;
			});
		}
	};
	const decrement = (index) => {
		if (cart.products[index].quantity > 1) {
			setCart((prev) => {
				const newCart = { ...prev };
				newCart.products[index].quantity = newCart.products[index].quantity - 1;
				let newTotal = 0;
				newCart.products.forEach((product) => {
					newTotal += product.price * product.quantity;
				});
				setTotal(newTotal);
				return newCart;
			});
		}
	};
	useEffect(() => {
		const fetchCart = async () => {
			if (!userID) {
				return;
			}
			try {
				const response = await axios.get(
					`http://localhost:4000/api/cart/user?userID=${userID}`
				);
				const cartData = response.data.response;
				setCart(cartData);

				if (cartData.products) {
					const fetchProduct = new Promise((resolve) => {
						let newTotal = 0;
						cartData.products.map((product) => {
							newTotal += product.price * product.quantity;
						});
						resolve(newTotal);
					});

					const stocksPromise = Promise.all(
						cartData.products.map(async (product) => {
							const response = await axios.get(
								`http://localhost:4000/api/cart/products/${product.productID}/variants/${product.variantIndex}`
							);
							return response.data.stock;
						})
					);

					const [newTotal, stocks] = await Promise.all([
						fetchProduct,
						stocksPromise,
					]);

					setTotal(newTotal);
					setStock(stocks);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCart();
	}, [userID]);

	const navigate = useNavigate();
	const checkout = () => {
		console.log(cart);
		navigate("/checkout", { state: { cartQuantity: cart } });
	};
	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
			<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
				<li>
					<a href="">Home</a>
				</li>
				<li className="px-3">/</li>
				<li>
					<a href="">Cart</a>
				</li>
			</ul>

			{/* Titles  */}
			<div className="hidden  lg:flex flex-col gap-5 xs:my-6 sm:my-8 md:my-10 lg:my-12 border-black border-b-2">
				{updateCart.updateCart ? (
					<div className="flex border-2 shadow-md rounded-md  ">
						<input
							type="checkbox"
							className="mx-3"
							checked={selectAll}
							onChange={(e) => toggleSelectAll(e)}
						/>
						<div className="w-full grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4   ">
							<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
							<p className="text-center ">Price</p>
							<p className="text-center ">Quantity</p>
							<p className="text-right ">Subtotal</p>
						</div>
					</div>
				) : (
					<div className="grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4  border-2 shadow-md rounded-md  ">
						<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
						<p className="text-center ">Price</p>
						<p className="text-center ">Quantity</p>
						<p className="text-right ">Subtotal</p>
					</div>
				)}
				{/* DIsplay products  */}
				<div className="flex flex-col justify-center shadow-md lg:shadow-none lg:border-none md:gap-5 lg:gap-7 xl:gap-10  ">
					{cart.products &&
						cart.products.map((product, index) => (
							<div
								key={`${product._id}-${index}`}
								className="border shadow-md rounded-md "
							>
								{updateCart.updateCart ? (
									<div className=" flex">
										<input
											key={index}
											type="checkbox"
											className="mx-3 "
											checked={checkedValuesIndex.includes(index)} // Check if the checkbox should be checked
											onChange={(e) => toggleCheckbox(e, index)}
										/>
										<CartList
											name={product.productName}
											price={product.price}
											quantity={cart.products[index].quantity} // Pass the updated quantity from the cart state
											image={product.image || ""}
											stock={stock[index]}
											increment={() => increment(index)}
											decrement={() => decrement(index)}
										/>
									</div>
								) : (
									<CartList
										name={product.productName}
										price={product.price}
										quantity={cart.products[index].quantity} // Pass the updated quantity from the cart state
										stock={stock[index]}
										image={product.image || ""}
										increment={() => increment(index)}
										decrement={() => decrement(index)}
									/>
								)}
							</div>
						))}
				</div>
			</div>

			{/* Display products for mobile */}
			<div className="lg:hidden flex flex-col gap-6 xs:my-6 sm:my-4 md:my-6 border-black border-b-2">
				{cart.products &&
					cart.products.map((product, index) => (
						<div key={`${product._id}-${index}`} className="">
							<CartListMobile
								name={product.productName}
								price={product.price}
								quantity={product.quantity}
								image={product.image || ""}
							/>
						</div>
					))}
			</div>

			{/* Return And Update /Delete */}
			<div className="hidden md:flex justify-between">
				<button className="border border-black w-52 py-4">
					Return To Shop
				</button>
				<div className="flex gap-5 ">
					{updateCart.updateCart && (
						<button
							onClick={deleteCart}
							className={`text-white bg-custom-red
              }-500 border border-black w-52 py-4`}
						>
							Delete
						</button>
					)}
					{/* Update Button */}
					<button
						onClick={handleUpdateCart}
						className={`${
							isClicked ? "bg-white" : "   text-white bg-custom-red"
						} border border-black w-52 py-4`}
					>
						{updateCart.updateCartText}
					</button>
				</div>
			</div>

			{/* coupon and proceed to checkout */}

			<div className="flex md:justify-between flex-col gap-3 md:flex-row  py-5 lg:py-8 ">
				<div className="flex justify-between gap-3 md:flex-wrap md:justify-normal flex-nowrap md:h-24">
					<input
						type="text"
						placeholder="Coupon Code"
						className="text-sm border border-black md:h-11 rounded-md pl-2 w-auto sm:pl-3 md:pl-4 md:w-48 lg:w-60 xl:w-80 lg:text-lg"
					/>
					<Button title="Apply Coupon" function={toggleCoupon} />
				</div>
				<div className="border border-black p-2 md:p-4 flex flex-col gap-4 md:gap-6 lg:gap-8 md:w-1/2 xl:w-2/5">
					<p className="md:text-lg xl:text-xl font-semibold">Cart Total</p>
					<div className="flex flex-col gap-2 md:gap-3 md:gap-">
						<div className="flex justify-between">
							<p>SubTotal: </p>
							<p>₱ {total.toLocaleString()}</p>
						</div>
						<hr className="border border-black" />
						<div className="flex justify-between">
							<p>Shipping: </p>
							<p>₱ {shippingFee.toLocaleString()}</p>
						</div>
						<hr className="border border-black" />
						<div className="flex justify-between">
							<p>Total: </p>
							<p>₱ {(total + shippingFee).toLocaleString()}</p>
						</div>
					</div>

					<div className="text-right">
						<Button title="Proceed To Checkout" function={checkout} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

// View Products Button
export const CartButton = (props) => {
	return (
		<div className=" text-white bg-orange-500 border border-black">
			{props.title}
		</div>
	);
};
CartButton.propTypes = {
	title: PropTypes.string.isRequired,
};

export const CartList = (props) => {
	//const [quantity, setQuantity] = useState(props.quantity);
	return (
		<div className="grid md:grid-cols-5 lg:grid-cols-4 px-3 lg:px-5 my-2  w-full">
			<div className="flex gap-4 items-center text-left md:col-span-2 lg:col-span-1 ">
				<img src={props.image} alt="" className="md:size-14 lg:size-16" />
				<p className="lg:text-lg">{props.name}</p>
			</div>
			{/* Price */}
			<p className="items-center justify-center lg:text-lg flex ">
				₱ {props.price.toLocaleString()}
			</p>

			{/* Quantity */}

			<div className="flex flex-col items-center lg:text-lg ">
				<p className="text-xs py-1">
					<i>stocks left: {props.stock}</i>
				</p>
				<div>
					<button
						onClick={props.increment}
						className="border text-center text-xl px-2 text-white bg-custom-red rounded-s-md"
					>
						+
					</button>

					<input
						type="number"
						className=" w-10 border text-center outline-none "
						value={props.quantity}
						readOnly
					/>

					<button
						onClick={props.decrement}
						className="border text-center text-xl px-2 text-white bg-custom-red rounded-e-md"
					>
						-
					</button>
				</div>
			</div>

			{/* Subtotal */}
			<p className="flex  items-center justify-end  lg:text-lg ">
				₱ {(props.price * props.quantity).toLocaleString()}
			</p>
		</div>
	);
};

CartList.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	stock: PropTypes.number,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
};

export const CartListMobile = (props) => {
	const [quantity, setQuantity] = useState(props.quantity);
	return (
		<div className="flex justify-between shadow-sm sm:p-2 md:p-4">
			{/* image/name/desc */}
			<div className="flex grow gap-4 items-center">
				<img src={props.image} alt="" className="xs:size-16 sm:size-20 " />

				<p className="xs:text-sm md:text-base">{props.name}</p>
			</div>

			<div className=" w-20 sm:w-24 flex flex-col justify-center gap-2">
				<p className="xs:text-sm md:text-base text-right">
					₱ {props.price.toLocaleString()}
				</p>
				<div>
					<div className="flex justify-end">
						<button className=" border rounded-s-md bg-custom-red px-2 ">
							-
						</button>

						<input
							type="text"
							className="xs:w-8 sm:w-14 xs:text-sm md:text-base text-center border "
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value);
							}}
						/>

						<button className="border rounded-e-md bg-custom-red px-2">
							+
						</button>
					</div>
					<p className="text-xs py-1">
						<i>stocks left: {props.stock}</i>
					</p>
				</div>
			</div>
		</div>
	);
};

CartListMobile.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	stock: PropTypes.number,
};

export const Button = (props) => {
	return (
		<button
			onClick={props.function}
			className="border rounded-md text-sm text-white bg-custom-red px-4 py-2 md:text-base md:px-3 lg:px-8 md:py-0 lg:text-lg md:h-11"
		>
			{props.title}
		</button>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	function: PropTypes.func.isRequired,
};
