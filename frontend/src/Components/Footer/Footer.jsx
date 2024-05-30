import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import qr from "../../assets/qr.png";
const Footer = () => {
	return (
		<div className="bg-black pt-20 2xl:px-20 lg:px-18 md:px-14 xs:px-5 sm:px-8">
			<div className="flex flex-wrap text-white lg:justify-between xs:gap-10 sm:gap-8 md:gap-5 pb-20">
				{/* Exclusive */}
				<div className=" w-52">
					<p className="font-semibold text-lg pb-5">Exclusive</p>
					<ul className="flex flex-col gap-2 ">
						<li>
							<h3 className="font-inter text-base">Subscribe</h3>
						</li>
						<li>
							<h4 className="text-sm">Get 10% off your first order</h4>
						</li>
						<li className="flex border-2 px-2 items-center  h-9 rounded-md">
							<input
								type="text"
								className="bg-transparent outline-none text-sm "
								placeholder="Enter Your Email"
							/>
							<FontAwesomeIcon
								icon={faCaretRight}
								style={{ color: "#ffffff" }}
							/>
						</li>
					</ul>
				</div>
				{/* Suppoert */}
				<div className="  w-52">
					<p className="font-semibold text-lg pb-5">Support</p>
					<ul className="flex flex-col gap-2">
						<li>111 Bijoy sarani, Dhaka,</li>
						<li> DH 1515, Bangladesh.</li>
						<li>exclusive@gmail.com</li>
						<li>+88015-88888-9999</li>
					</ul>
				</div>
				{/* Account */}
				<div className=" w-52">
					<p className="font-semibold text-lg pb-5"> Account</p>
					<ul className="flex flex-col gap-2">
						<li>My Account</li>
						<li>Login / Register</li>
						<li>Cart</li>
						<li>Wishiist</li>
						<li>Shop</li>
					</ul>
				</div>
				{/* Quick Link */}
				<div className="w-52">
					<p className="font-semibold text-lg pb-5">Quick Link</p>
					<ul className="flex flex-col gap-2">
						<li>Privacy Policy</li>
						<li>Terms Of Use</li>
						<li>FAQ</li>
						<li>Contact</li>
					</ul>
				</div>
				{/* Download App */}

				<div className=" w-52">
					<p className="font-semibold text-lg pb-5">Download App</p>
					<ul className="flex flex-col gap-2">
						<li className="text-sm">Save $3 with App New User Only</li>
						<li>
							<img src={qr} alt="" />
						</li>
						<li>
							<div className="flex gap-x-4">
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faFacebook} size="2x" />
								</a>
								<a
									href="https://www.twitter.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a
									href="https://www.instagram.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</a>
								<a
									href="https://www.linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex py-3 items-center justify-center">
				<p className="xs:text-sm md:text-base text-gray-500">
					Copyright Rimel 2022. All right reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
