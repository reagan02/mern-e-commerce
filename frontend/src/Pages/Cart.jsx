import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import NavigationList from "../Components/NavigationList/NavigationList";
import CartHeader from "../Components/Cart/CartHeader";
import DisplayCart from "../Components/Cart/DisplayCart";
import { UseAuthContext } from "../Hooks/Authentication/UseAuthContext";
import { CartContext } from "../Context/Cart/CartContext";
import UpdateButton from "../Components/Cart/UpdateButton";
import PlaceOrder from "../Components/Cart/PlaceOrder";

const Cart = () => {
	const { cart, setCart, setLoading } = useContext(CartContext);
	const {
		state: { user },
	} = UseAuthContext();
	const userID = user?.user?._id;

	useEffect(() => {
		const fetchCart = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:4000/api/cart/user?userID=${userID}`
				);
				setCart(response.data.products);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, userID]);

	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
			<NavigationList
				list={[
					{ link: "/home", text: "Home" },
					{
						link: "",
						text: "Account",
					},
					{
						link: "",
						text: "Cart",
					},
				]}
			/>
			<div className="flex flex-col gap-5 xs:my-6 sm:my-8 md:my-10 lg:my-12 ">
				<CartHeader />

				{Array.isArray(cart) && cart.length > 0 ? (
					<div>
						<DisplayCart />
						<UpdateButton />
						<PlaceOrder />
					</div>
				) : (
					<div className="text-center md-10 md:my-14 lg:my-20 ">
						<p className="font-extrabold sm:text-xl md:text-3xl lg:text-4xl ">
							Empty Cart
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
