import log from "../../assests/log.png";
import Button from "../../Components/Homepage/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const account = { email, password };

  const navigate = useNavigate();

  // POST request to log in
  const submit = async (e) => {
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
    <div>
      <div className="flex my-10">
        <div className=" border-2 w-1/2 h-1/6">
          <img src={log} alt="" className=" " />
        </div>
        {/* Log In // SignUp*/}
        <div className=" w-1/2 flex items-center justify-center">
          {/* Log In */}
          <div className="">
            <h1 className="text-4xl font-inter font-semibold my-5">
              Log In to Exclusive
            </h1>
            <p className="text-xl ">Enter your details below</p>

            {/* POST FORM to log in */}
            <form onSubmit={submit}>
              {/* Email or Phone Number */}
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="text-xl mt-20 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr className="my-2" />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="text-xl mt-10 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr className="my-2" />

              {/* Display Email Error Message */}
              {error && <p className="text-red-500">{error}</p>}

              {/* Log In Button */}
              <div className="flex justify-between items-center mt-5">
                <button type="submit">
                  <Button title="Log In" height="2.5" width="7" />
                </button>
                <a href="" className="text-orange-600 text-base">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
