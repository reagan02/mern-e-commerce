import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faCircleUser,
  faBagShopping,
  faXmarkCircle,
  faStar,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleSubmit = () => {
    setClick(!click);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setClick(!click);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/accounts/logout");
      sessionStorage.removeItem("userID"); // Clear user data from local storage
      console.log("Session destroyed");
      setClick(!click);
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Error destroying session:", error);
    }
  };
  const isUserLoggedIn = sessionStorage.getItem("userID") !== null;
  return (
    <div className="h-18 w-full flex border-b justify-between items-end pt-7 pb-4 bg-white lg:px-20 md:px-14 xs:px-10">
      {/* Company Name // Title */}
      <NavLink to="home" className="">
        <h1 className="text-4xl font-inter font-semibold ">Exclusive</h1>
      </NavLink>

      {/* Navigation (Home, Contact, About, SignUp)  */}
      <nav className="grow ">
        <ul className="flex justify-evenly text-xl">
          <li>
            <NavLink to="home" className="">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className="">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="signup" className="">
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-end justify-end h-10 gap-7">
        <div className="flex justify-between bg-gray-200 px-3 items-center rounded-sm">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent text-sm flex grow h-10 border-0 "
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5 pl-4" />
        </div>
        <div className="flex items-center h-full gap-10">
          <FontAwesomeIcon icon={faHeart} className="size-5" />
          <FontAwesomeIcon icon={faCartShopping} className="size-5 " />
          {/* Account Log Icon */}
          <div>
            <button onClick={handleSubmit}>
              <FontAwesomeIcon icon={faCircleUser} className="size-5" />
            </button>
            {click &&
              (isUserLoggedIn ? (
                <div className="absolute right-20 top-28 rounded-md text-white bg-slate-900 ">
                  <a href="" className="">
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon icon={faCircleUser} className="size-5" />
                      <p className="text-base">Manage My Account</p>
                    </div>
                  </a>
                  <a href="" className="">
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon icon={faCircleUser} className="size-5" />
                      <p className="text-base">My Order</p>
                    </div>
                  </a>
                  <a href="" className="">
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="size-5"
                      />
                      <p className="text-base">My Order</p>
                    </div>
                  </a>
                  <a href="" className="">
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faXmarkCircle}
                        className="size-5"
                      />
                      <p className="text-base">My Cancellations</p>
                    </div>
                  </a>
                  <a href="" className="">
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon icon={faStar} className="size-5" />
                      <p className="text-base">My Reviews</p>
                    </div>
                  </a>
                  <button onClick={handleLogout}>
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="size-5"
                      />
                      <p className="text-base">Logout</p>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="absolute right-20 top-28 rounded-md text-white bg-slate-900">
                  <button onClick={handleLogin}>
                    <div className="my-3 px-5 flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="size-5"
                      />
                      <p className="text-base">Login</p>
                    </div>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
