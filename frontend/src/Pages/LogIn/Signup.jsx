import log from "../../assests/log.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { validateInput } from "./validation.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = sessionStorage.getItem("userID");

    if (isLoggedIn) {
      alert("Please Logout First Before Creating an Account");
    } else {
      const errors = validateInput(userName, email, password);

      if (Object.keys(errors).length > 0) {
        setError(errors);
        console.error(errors);
        return;
      }

      const account = { userName, email, password };

      try {
        const response = await axios.post(
          "http://localhost:4000/api/accounts",
          account
        );
        setUserName("");
        setEmail("");
        setPassword("");

        console.log("new account added", response.data);
        console.log(response.data); // { signup: true }
        sessionStorage.setItem("userID", response.data.user._id);
        navigate("/home");
        window.location.reload();
      } catch (error) {
        console.error(error);
        // Check if the error response has a status of 400 and log it
        if (error.response && error.response.status === 400) {
          console.log("Email is already in use");
          setError({ email: error.response.data.error });
        }
      }
    }
  };
  return (
    <div className="flex gap-1 xl:gap-5 xs:my-6 sm:my-8 lg:my-10">
      <img src={log} alt="" className="hidden lg:block lg:w-7/12 xl:w-2/3 " />

      <div className=" w-full lg:ml-16  xl:ml-28 xl:mt-8">
        {/* SignUp */}
        <h1 className="text-xl md:text-2xl xl:text-4xl font-inter font-semibold my-4 lg:my-5 lg:tracking-wider">
          Create an account
        </h1>
        <p className="lg:text-lg xl:text-xl ">Enter your details below</p>
        {/* INPUTS TO CREATE ACCOUNT */}
        <div className="flex flex-col xs:gap-5 md:gap-8 lg:gap-10 mt-8 lg:mt-10">
          <div>
            <Inputs
              type="text"
              placeholder="Username"
              value={userName}
              function={(e) => {
                setUserName(e.target.value);
                setError((prevErrors) => ({ ...prevErrors, userName: null }));
              }}
            />
            <hr className="my-2" />
            {/* Display Error Message */}
            {error.name && <p className="text-red-500">{error.name}</p>}{" "}
          </div>
          <div>
            <Inputs
              type="text"
              placeholder="Email"
              value={email}
              function={(e) => {
                setEmail(e.target.value);
                setError((prevErrors) => ({ ...prevErrors, email: null }));
              }}
            />
            <hr className="my-2" />
            {/* Display Error Message */}
            {error.email && <p className="text-red-500">{error.email}</p>}{" "}
          </div>
          <div>
            <Inputs
              type="password"
              placeholder="Password"
              value={password}
              function={(e) => {
                setPassword(e.target.value);
                setError((prevErrors) => ({ ...prevErrors, password: null }));
              }}
            />
            <hr className="my-2" />
            {/* Display Error Message */}
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>
          {/* BUTTONS */}

          <div className="flex flex-col gap-5">
            <Button
              title="Sign Up"
              bgColor="bg-orange-600"
              textColor="text-white"
              function={handleSubmit}
            />
            <Button
              title="Sign up with Google"
              bgColor="bg-white"
              textColor="text-black"
              function={handleSubmit}
            />
          </div>
        </div>

        <div className="flex gap-4 lg:gap-0 lg:justify-evenly mt-5 lg:mb-0 mb-20">
          <p>Aready have account?</p>
          <NavLink to="/login">
            <u className="font-semibold"> Log In</u>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Signup;

export const Inputs = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="text-base md:text-lg xl:text-xl w-full outline-none  "
      value={props.value}
      onChange={props.function}
    />
  );
};

Inputs.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]).isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
};

export const Button = (props) => {
  return (
    <button
      className={`${props.bgColor} ${props.textColor} xs:text-base lg:text-lg xl:text-xl w-full py-2 rounded-md border-2`}
      onClick={props.function}
    >
      {props.title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
};
