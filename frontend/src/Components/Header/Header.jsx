import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
	const [userName, setUserName] = useState(null);

	useEffect(() => {
		const userID = sessionStorage.getItem("userID");
		const fetchUsername = async () => {
			{
				try {
					const response = await axios.get(
						`https://exclusive-api.vercel.app/api/accounts/${userID}`
					);
					setUserName("Welcome " + response.data.account.userName);
				} catch (error) {
					console.error(error);
				}
			}
		};
		fetchUsername();
	}, []);
	return (
		<div className="bg-black w-full flex xs:justify-center md:justify-between sm:items-center lg:py-2  md:py-2  xs:py-1 2xl:px-20 lg:px-18 md:px-14 xs:px-10 ">
			<div className="text-white ">
				<p className="lg:text-base sm:text-xs sm:block xs:hidden">{userName}</p>
			</div>
			<div className="text-white ">
				<p className="lg:text-base sm:text-xs md:block hidden">
					Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{" "}
					<u>ShopNow</u>
				</p>

				<p className="text-xs md:hidden ">
					<u>Shop Now</u> For All Swim Suits - OFF 50%
				</p>
			</div>
			<div className="lg:text-base text-sm hidden md:block">
				<select name="Language" className="bg-black text-white">
					<option value="English">English</option>
					<option value="Spanish">Spanish</option>
					<option value="Chinese">Chinese</option>
					<option value="Korean">Korean</option>
					<option value="v">V</option>
				</select>
			</div>
		</div>
	);
};

export default Header;
