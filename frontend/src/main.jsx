import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Login from "./Pages/LogIn/Login";
import Signup from "./Pages/LogIn/Signup";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import Productpage from "./Pages/Productpage";
import Wishlist from "./Pages/Wishlist";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Mainpage />}>
			<Route index path="/home" element={<Homepage />} />
			<Route path="contact" element={<Contact />} />
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<Signup />} />
			<Route path="about" element={<About />} />
			<Route path="cart" element={<Cart />} />
			<Route path="checkout" element={<Checkout />} />
			<Route path="product/:id" element={<Productpage />} />
			<Route path="wishlist" element={<Wishlist />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	//<React.StrictMode>

	<RouterProvider router={router} />

	//	</React.StrictMode>
);
