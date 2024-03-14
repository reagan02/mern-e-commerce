import log from "../../assests/log.png";
import Button from "../Homepage/Button";
import { NavLink } from "react-router-dom";

const Signup = () => {
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
            <input type="text" placeholder="Name " className="text-xl mt-20" />
            <hr className="my-2" />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="text-xl mt-10 border-non"
            />
            <hr className="my-2" />
            <input
              type="text"
              placeholder="Password"
              className="text-xl mt-10"
            />
            <hr className="my-2" />
            <div className="mt-10">
              <Button title="Create Account" height="3" width="full" />
            </div>
            <a
              href=""
              className="w-full flex justify-center border-2 text-xl mt-5 py-2"
            >
              Sign up with Google
            </a>
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
