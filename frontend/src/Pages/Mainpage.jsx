import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const Mainpage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/home");
		}
	}, [location, navigate]);

	return (
		<div>
			<ScrollToTop />
			<div className="sticky top-0 w-full z-10">
				<Header />
				<Navbar />
			</div>
			<div className="2xl:px-20 lg:px-18 md:px-14 xs:px-5 sm:px-8">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default Mainpage;
