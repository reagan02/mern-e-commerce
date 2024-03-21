import log from "../../assests/log.png";
import Button from "../../Components/Homepage/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { validateInput } from "./validation.js";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateInput(name, email, password);

    if (Object.keys(errors).length > 0) {
      setError(errors);
      console.error(errors);
      return;
    }

    const account = { name, email, password };
    console.log("account:", account);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/accounts",
        account
      );
      setName("");
      setEmail("");
      setPassword("");

      console.log("new account added", response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <div className="flex my-10">
        <div className=" border-2 w-1/2 h-1/6">
          <img src={log} alt="" className=" " />
        </div>
        <div className=" w-1/2 flex items-center justify-center">
          {/* SignUp */}
          <div className="">
            <h1 className="text-4xl font-inter font-semibold my-5">
              Create an Account
            </h1>
            <p className="text-xl ">Enter your details below</p>

            {/* POST FORM to create account */}
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="text-xl mt-20 border-none w-80 outline-none"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError((prevErrors) => ({ ...prevErrors, name: null }));
                }}
              />
              <hr className="my-2" />
              {error.name && <p>{error.name}</p>}
              {/* Email or Phone Number */}
              <input
                type="email"
                placeholder="Email"
                className="text-xl mt-10 border-none w-80 outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError((prevErrors) => ({ ...prevErrors, email: null }));
                }}
              />
              <hr className="my-2" />
              {error.email && <p>{error.email}</p>}
              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="text-xl mt-10 border-none w-80 outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError((prevErrors) => ({ ...prevErrors, password: null }));
                }}
              />
              <hr className="my-2" />
              {error.password && <p>{error.password}</p>}
              <div className="mt-10">
                <Button
                  title="Create Account"
                  height="3"
                  type="submit"
                  width="24"
                />
              </div>
            </form>

            {/* Google Sign Up */}
            <a
              href=""
              className="w-full flex justify-center border-2 text-xl mt-5 py-2"
            >
              Sign up with Google
            </a>

            {/* Redirect to Log in Page */}
            <div className="flex justify-evenly mt-5">
              <p>Aready have account?</p>
              <NavLink to="/login">
                <u className="font-semibold"> Log In</u>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
