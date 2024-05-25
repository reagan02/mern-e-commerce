import InputDetails from "../Components/Checkout/InputDetails";
import { useEffect, useState, useRef } from "react";
import ItemList from "../Components/Checkout/ItemList";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./Checkout.css";

const Checkout = () => {
	const navigate = useNavigate();
	const location = useLocation(); // location hook
	const isLoggedIn = sessionStorage.getItem("userID"); // get the user ID
	const userID = sessionStorage.getItem("userID");
	const [isChecked, setIsChecked] = useState(false);
	const shippingFee = 150;
	const [paymentMethod, setPaymentMethod] = useState("");
	const [subtotalPrice, setSubtotalPrice] = useState(0);
	const totalPrice = subtotalPrice + shippingFee;
	const couponCode = "sampleCode";
	const [cartData, setCartData] = useState({});
	// locations state from the product page
	// Initialize the refs
	const productID = useRef(null);
	const quantity = useRef(null);
	const size = useRef(null);
	const [locationState, setLocationState] = useState(false); // [productID, quantity, size, from
	const cartQuantity = location.state.cartQuantity;

	// Place Order
	const [billingDetails, setBillingDetails] = useState({
		firstName: "",
		lastName: "",
		streetAddress: "",
		optionalAddress: "",
		townCity: "",
		phoneNumber: "",
		email: "",
	});

	// Product Data
	const [productData, setProductData] = useState({
		name: "",
		price: 0,
		image: "",
	});

	// Order Items Array Data

	const [orderItems, setOrderItems] = useState([
		{
			productID: "",
			size: "",
			price: 0,
			quantity: 0,
		},
	]);

	// Check if user is logged in
	useEffect(() => {
		if (!isLoggedIn) {
			alert("Please Login First");
			navigate("/login");
		}
	}, [isLoggedIn, navigate]);

	// Handle Checkbox Click
	const handleCheckboxClick = () => {
		setIsChecked(!isChecked);
	};

	// Handle Place Order
	const handlePlaceOrder = async () => {
		try {
			const response = await axios.patch(
				`http://localhost:4000/api/accounts/${userID}`,
				billingDetails
			);
			console.log(response.data);
			if (location.state) {
				const orderData = await axios.post(
					"http://localhost:4000/api/orders/",
					{
						userID,
						billingDetails,
						orderItems,
						totalPrice,
						couponCode: couponCode,
						paymentMethod,
					}
				);

				alert("Order Placed Successfully");
			} else {
				let totalProductsPrice = 0;
				for (let i = 0; i < cartData.products.length; i++) {
					totalProductsPrice +=
						cartData.products[i].price * cartData.products[i].quantity;
				}
				setSubtotalPrice(totalProductsPrice);
				const orderData = await axios.post(
					"http://localhost:4000/api/orders/",
					{
						userID,
						billingDetails,
						orderItems: cartData.products,
						totalPrice,
						couponCode: couponCode,
						paymentMethod,
					}
				);
				console.log(orderData.data);
				alert("Order Placed Successfully");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error Occurred");
		}
	};
	useEffect(() => {
		const fetchUser = async () => {
			const responseUser = await axios.get(
				`http://localhost:4000/api/accounts/${userID}`
			);
			setBillingDetails(responseUser.data.account); // set the billing details
		};
		fetchUser();
	}, [userID]); // Only re-run the effect if userID changes

	// Fetch User && Product Data
	useEffect(() => {
		const fetchData = async () => {
			if (cartQuantity) {
				setLocationState(false);
				const response = await axios.get(
					`http://localhost:4000/api/cart/user?userID=${userID}`
				);
				setCartData(response.data.response);
				const partialPrice = cartQuantity.products.reduce((total, product) => {
					return total + product.price * product.quantity;
				}, 0);

				setSubtotalPrice(partialPrice);
			} else {
				productID.current = location.state.productID;
				quantity.current = location.state.quantity;
				size.current = location.state.size;

				try {
					const id = productID.current;
					const responseProduct = await axios.get(
						`http://localhost:4000/api/products/${id}`
					);
					setOrderItems([
						{
							productID: productID.current,
							size: size.current,
							price: productData.price,
							quantity: quantity.current,
						},
					]);
					setProductData({
						name: responseProduct.data.product.name,
						price: responseProduct.data.product.variants[size.current].price,
						image: responseProduct.data.product.images[0],
					});
					setSubtotalPrice(
						responseProduct.data.product.variants[size.current].price *
							quantity.current
					);
					setLocationState(true);
				} catch (error) {
					console.error(error);
				}
			}
		};
		fetchData();
	}, [userID, location.state, productData]);

	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10">
			{locationState && (
				<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
					<li>
						<a href="">Home</a>
					</li>
					<li className="px-1 md:px-3">/</li>
					<li>
						<a href="">Category</a>
					</li>
					<li className="px-1 md:px-3">/</li>
					<li>
						<a href="">{productData.name}</a>
					</li>
					<li className="px-1 md:px-3">/</li>
					<li className="font-semibold">
						<a href="">CheckOut</a>
					</li>
				</ul>
			)}
			{!locationState && (
				<ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
					<li>
						<a href="">My Account</a>
					</li>
					<li className="px-3">/</li>
					<li>
						<a href="">Cart</a>
					</li>
					<li className="px-3">/</li>
					<li className="font-semibold">
						<a href="">CheckOut</a>
					</li>
				</ul>
			)}

			{/* Billing Details */}
			<h1 className="text-xl md:text-2xl xl:text-3xl font-inter font-semibold my-6 lg:my-10 lg:tracking-wider">
				Billing Details
			</h1>

			<div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:mr-15 xl:mr-20 ">
				{/* Details input tags */}
				<div
					className="w-full 
				"
				>
					<InputDetails
						title="First Name"
						value={billingDetails.firstName}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								firstName: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Last Name"
						value={billingDetails.lastName}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								lastName: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Street Address"
						value={billingDetails.streetAddress}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								streetAddress: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Apartment, floor, etc.(optional)"
						value={billingDetails.optionalAddress}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								optionalAddress: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Town/City"
						value={billingDetails.townCity}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								townCity: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Phone Number"
						type={"number"}
						value={billingDetails.phoneNumber}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								phoneNumber: e.target.value,
							})
						}
					/>
					<InputDetails
						title="Email Address"
						type={"email"}
						readOnly={true}
						value={billingDetails.email}
						onChange={(e) =>
							setBillingDetails({
								...billingDetails,
								email: e.target.value,
							})
						}
					/>
					<div className="flex items-center text-sm sm:text-base md:text-lg">
						<input
							type="checkbox"
							onChange={handleCheckboxClick}
							className="size-4 md:size-5"
						/>
						<p className="px-2 md:px-5 md:text-lg">
							Save this information for faster check-out next time
						</p>
					</div>
				</div>
				{/*Item List to be Checkout  */}
				<div className=" mt-10 lg:mt-8">
					{locationState ? (
						<div className="">
							<ItemList
								image={productData.image}
								productName={productData.name}
								price={productData.price.toLocaleString()}
								quantity={quantity.current}
							/>
						</div>
					) : (
						<div className="lg:max-h-52 overflow-y-auto custom-scrollbar">
							{cartData.products &&
								cartData.products.map((item, index) => (
									<ItemList
										key={index}
										image={item.image}
										productName={item.productName}
										price={item.price.toLocaleString()}
										quantity={cartQuantity.products[index].quantity}
									/>
								))}
						</div>
					)}

					<div className="my-10 ">
						<div className="flex justify-between text-sm sm:text-base md:text-lg">
							<p>SubTotal:</p>
							<p>₱ {subtotalPrice.toLocaleString()}</p>
						</div>
						<hr className=" my-3 border border-black" />
						<div className="flex justify-between  text-sm sm:text-base md:text-lg">
							<p>Shipping:</p>
							<p>₱ {shippingFee.toLocaleString()}</p>
						</div>
						<hr className=" my-3 border border-black" />
						<div className="flex justify-between  text-sm sm:text-base md:text-lg">
							<p>Total:</p>
							<p>₱ {totalPrice.toLocaleString()}</p>
						</div>
						<div className="flex items-center py-5 text-sm sm:text-base md:text-lg ">
							<input
								type="radio"
								name="paymentMethod"
								value={"Bank"}
								onClick={(e) => setPaymentMethod(e.target.value)}
								className="size-5 rounded-full "
							/>
							<p className="px-5">Bank </p>
						</div>
						<div className="flex items-center text-sm sm:text-base md:text-lg">
							<input
								type="radio"
								name="paymentMethod"
								value={"CashOnDelivery"}
								onClick={(e) => setPaymentMethod(e.target.value)}
								className="size-5 rounded-full"
							/>
							<p className="px-5 ">Cash On Delivery </p>
						</div>
						<div className="flex justify-between gap-3 my-4">
							<input
								type="text"
								placeholder="Coupon Code"
								className="text-sm border border-black lg:py-2.5 rounded-md pl-2 w-auto sm:pl-3 md:pl-4 md:w-48 lg:w-60 xl:w-72 lg:text-lg"
							/>
							<Button title="Apply Coupon" />
						</div>
						<div className="text-right lg:text-left">
							<Button title="Place Order" onClick={handlePlaceOrder} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

export const Button = (props) => {
	return (
		<button
			onClick={props.function}
			className="border rounded-md text-sm text-white bg-custom-red px-4 py-2 sm:text-base md:text-lg md:px-3 xl:px-8 lg:py-2.5 lg:text-lg"
		>
			{props.title}
		</button>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	function: PropTypes.func,
};
