import log from "../../assests/log.png";
import Button from "../../Components/Homepage/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const account = { name, emailOrPhoneNumber, password };

    try {
      const response = await fetch("http://localhost:4000/api/accounts", {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error || "An error occurred");
      } else {
        console.log(name, emailOrPhoneNumber, password);
        setName("");
        setEmailOrPhoneNumber("");
        setPassword("");
        setError(null);
        console.log("new account added", json);
      }
    } catch (error) {
      setError("An error occurred");
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
                className="text-xl mt-20"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr className="my-2" />
              {/* Email or Phone Number */}
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="text-xl mt-10 border-non"
                value={emailOrPhoneNumber}
                onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
              />
              <hr className="my-2" />
              {/* Password */}
              <input
                type="text"
                placeholder="Password"
                className="text-xl mt-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr className="my-2" />
              <div className="mt-10">
                <Button
                  title="Create Account"
                  height="3"
                  width="full"
                  type="submit"
                />
              </div>
              {error && <div>{error}</div>}
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
