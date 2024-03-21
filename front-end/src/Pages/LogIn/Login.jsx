import log from "../../assests/log.png";
import Button from "../../Components/Homepage/Button";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    // Sending LOGIN POST request to the back end -> server
    try {
      await axios
        .post("http://localhost:4000/login", {
          emailOrPhoneNumber,
          password,
        })
        .then((res) => {
          if (res.data == "Email or Phone Number already exists") {
            console.log("Email or Phone Number already exists");
          } else if (res.data == "Not Exist") {
            console.log("Not Exist");
          }
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
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
            <form action="POST">
              {/* Email or Phone Number */}
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="text-xl mt-20"
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
              <div className="flex justify-between items-center mt-5">
                <Button
                  title="Log In"
                  height="2.5"
                  width="7"
                  type="submit"
                  onClick={submit}
                />
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
