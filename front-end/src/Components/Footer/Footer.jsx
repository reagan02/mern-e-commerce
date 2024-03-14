import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import qr from "../../assests/qr.png";
const Footer = () => {
  return (
    <div className="bg-black pt-20 px-20">
      <div className="w-full text-white flex justify-between pb-20">
        {/* Exclusive */}
        <div className="">
          <h2 className="font-semibold text-2xl pb-5">Exclusive</h2>
          <div className="flex flex-col gap-4 pb-2">
            <h3 className="font-inter text-xl">Subscribe</h3>
            <h4>Get 10% off your first order</h4>
          </div>
          <div className="flex border-2 justify-between px-2 items-center h-12 rounded-md">
            <input
              type="text"
              className="text-gray-700 bg-transparent"
              placeholder="Enter Your Email"
            />
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff" }} />
          </div>
        </div>
        {/* Suppoert */}
        <div>
          <h2 className="font-semibold text-2xl pb-5">Support</h2>
          <div className="flex flex-col gap-4">
            <div>
              <p>111 Bijoy sarani, Dhaka,</p>
              <p> DH 1515, Bangladesh.</p>
            </div>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        {/* Account */}
        <div>
          <h2 className="font-semibold text-2xl pb-5">Account</h2>
          <div className="flex flex-col gap-4">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        {/* Quick Link */}
        <div>
          <h2 className="font-semibold text-2xl pb-5">Quick Link</h2>
          <div className="flex flex-col gap-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        {/* Download App */}

        <div>
          <h2 className="font-semibold text-2xl pb-5">Download App</h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm"> Save $3 with App New User Only</p>
            <img src={qr} alt="" />
            <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
      <div className="flex py-3 items-center justify-center">
        <p className="text-gray-500">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
