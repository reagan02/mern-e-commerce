import Button from "../Components/Homepage/Button";
import { NavLink } from "react-router-dom";
const NotFound = () => {
	return (
		<div className="mt-10">
			<ul className="flex text-xl">
				<li>
					<a href="">Home</a>
				</li>
				<li className="px-3">/</li>
				<li>
					<a href="">404 Error</a>
				</li>
			</ul>

			<div className="my-36 flex flex-col items-center">
				<h1 className="font-semibold font-inter" style={{ fontSize: "100px" }}>
					404 Not Found
				</h1>
				<p className="text-xl mt-10 mb-20">
					Your visited page not found. You may go home page.
				</p>
				<NavLink to="/home">
					<Button title="Back to home page" width="20" height="3" />
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
