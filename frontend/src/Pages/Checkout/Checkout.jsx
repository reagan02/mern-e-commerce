import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationList from "../../Components/NavigationList/NavigationList";
import "./Checkout.css";
import BillingDetails from "../../Components/Checkout/BillingDetails";
import OrderSummary from "../../Components/Checkout/OrderSummary";
import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
import { useContext } from "react";
const Checkout = () => {
	const location = useLocation();
	const { orders, fromCart } = location.state;
	const { setOrderData } = useContext(CheckoutContext);
	console.log("Checkout", orders);
	console.log("Checkout", fromCart);
	useEffect(() => {
		setOrderData(orders);
	}, [orders]);

	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10">
			<NavigationList
				list={[
					{ link: "/home", text: "Home" },
					{
						link: "",
						text: "Account",
					},
					{
						link: `/product/${orders.productID}`,
						text: orders.productName,
					},
					{
						link: "",
						text: "Checkout",
					},
				]}
			/>

			{/* Billing Details */}
			<h1 className="text-xl md:text-2xl xl:text-3xl font-inter font-semibold my-6 lg:my-10 lg:tracking-wider">
				Billing Details
			</h1>

			<div className="lg:grid lg:grid-cols-2 lg:gap-24">
				{/* Details input tags */}
				<BillingDetails />
				<OrderSummary orders={orders} fromCart={fromCart} />
			</div>
		</div>
	);
};

export default Checkout;
