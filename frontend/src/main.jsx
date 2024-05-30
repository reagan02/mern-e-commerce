import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import AuthContextProvider from "./Context/Authentication/AuthContextProvider";
import LoadingSpinner from "./LoadingDisplay/LoadingSpinner";

import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Login from "./Pages/Authentication/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout/Checkout";
import Productpage from "./Pages/Productpage";
import Wishlist from "./Pages/Wishlist";
import SignUp from "./Pages/Authentication/SignUp";
import App from "./App";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route
				path="/home"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<Homepage />
					</React.Suspense>
				}
			/>
			<Route path="contact" element={<Contact />} />
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="about" element={<About />} />
			<Route
				path="cart"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<Cart />
					</React.Suspense>
				}
			/>
			<Route
				path="checkout"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<Checkout />
					</React.Suspense>
				}
			/>
			<Route
				path="product/:id"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<Productpage />
					</React.Suspense>
				}
			/>
			<Route
				path="wishlist"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<Wishlist />
					</React.Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<React.Suspense fallback={<LoadingSpinner />}>
						<NotFound />
					</React.Suspense>
				}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	</React.StrictMode>
);
