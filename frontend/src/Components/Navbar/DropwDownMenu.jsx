import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleUser,
	faBagShopping,
	faXmarkCircle,
	faStar,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { UseAuthContext } from "../../Hooks/Authentication/UseAuthContext";
import DropDownList from "./DropDownList";
import { useNavigate, Link } from "react-router-dom";
import { LogoutHook } from "../../Hooks/Authentication/LogoutHook";
const DropdownMenu = () => {
	const {
		state: { user },
	} = UseAuthContext();
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const { logout } = LogoutHook();

	const handleUserIcon = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = async () => {
		setIsOpen(!isOpen);
		logout();
		alert("Logged out successfully");
		navigate("/login");
	};

	return (
		<div className="relative">
			<button onClick={handleUserIcon}>
				<FontAwesomeIcon icon={faCircleUser} className="size-5" />{" "}
				{/* Account Icon */}
			</button>
			{isOpen && user && (
				<div className="absolute right-0 top-8 rounded-md text-white bg-slate-900 border">
					<Link to="">
						<DropDownList
							icon={faCircleUser}
							text="Manage My Account"
							handleClick={() => setIsOpen(!isOpen)}
						/>
					</Link>
					<Link to="/cart">
						<DropDownList
							icon={faBagShopping}
							text="My Cart"
							handleClick={() => setIsOpen(!isOpen)}
						/>
					</Link>
					<Link to="">
						<DropDownList icon={faXmarkCircle} text="My Order" />
					</Link>
					<Link to="">
						<DropDownList
							icon={faStar}
							text="My Cancellations"
							handleClick={() => setIsOpen(!isOpen)}
						/>
					</Link>
					<DropDownList
						icon={faArrowRightFromBracket}
						text="Logout"
						handleClick={handleLogout}
					/>
				</div>
			)}

			{isOpen && !user && (
				<div className="absolute right-0 top-8 rounded-md text-white bg-slate-900 border">
					<Link to="/login">
						<DropDownList
							icon={faArrowRightFromBracket}
							text="Login"
							handleClick={() => setIsOpen(!isOpen)}
						/>
					</Link>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
// {
// 	isOpen && (
// 		<div
// 			className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 ${
// 				isUserLoggedIn ? "block" : "hidden"
// 			}`}
// 		>
// 			<a
// 				href="#"
// 				className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				Manage My Account
// 			</a>
// 			<a
// 				href="#"
// 				className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				My Cart
// 			</a>
// 			<a
// 				href="#"
// 				className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				My Order
// 			</a>
// 			<a
// 				href="#"
// 				className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				My Cancellations
// 			</a>
// 			<a
// 				href="#"
// 				className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				My Reviews
// 			</a>
// 			<button
// 				onClick={() => {}}
// 				className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				Logout
// 			</button>
// 		</div>
// 	);
// }

// {
// 	isOpen && (
// 		<div
// 			className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 ${
// 				isUserLoggedIn ? "hidden" : "block"
// 			}`}
// 		>
// 			<button
// 				onClick={() => {}}
// 				className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
// 			>
// 				Login
// 			</button>
// 		</div>
// 	);
// }
