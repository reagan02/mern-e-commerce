import log from "../../assests/log.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../LogIn/Signup";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const account = { email, password };

  const navigate = useNavigate();

  // POST request to log in
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = sessionStorage.getItem("userID");
    if (isLoggedIn) {
      alert("You are already logged in");
      navigate("/home");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/accounts/login",
          account
        );
        console.log(response.data); // { login: true }
        console.log("login success");
        sessionStorage.setItem("userID", response.data.user._id);
        navigate("/home");
        window.location.reload();
      } catch (error) {
        setError("Invalid Email or Password");
      }
    }
  };
  return (
    <div className="flex gap-1 xl:gap-5 xs:my-6 sm:my-8 lg:my-10 ">
      <img src={log} alt="" className="hidden lg:block lg:w-7/12 xl:w-2/3" />

      <div className=" w-full lg:ml-16 xl:ml-20 lg:mt-20 xl:mt-24">
        {/* SignUp */}
        <h1 className="text-xl md:text-2xl xl:text-4xl font-inter font-semibold my-4 lg:my-5 lg:tracking-wider">
          Log in to Exclusive
        </h1>
        <p className="lg:text-lg xl:text-xl ">Enter your details below</p>

        {/* LOG IN FORM */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col xs:gap-5 md:gap-8 lg:gap-10 mt-8 lg:mt-10">
            <div>
              <Inputs
                type="text"
                placeholder="Email"
                value={email}
                function={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <hr className="my-2" />
            </div>
            <div>
              <Inputs
                type="password"
                placeholder="Password"
                value={password}
                function={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <hr className="my-2" />
            </div>
          </div>
          {/* Display Email Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Log In Button */}
          <div className="flex gap-10 lg:justify-between items-center mt-5 lg:mb-0 mb-20">
            <button
              type="submit"
              className="bg-orange-600 text-white tracking-wider xs:text-base lg:text-lg xl:text-xl px-6 py-2 rounded-md border-2"
            >
              Log In
            </button>
            <a href="" className="text-orange-600 text-base">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
