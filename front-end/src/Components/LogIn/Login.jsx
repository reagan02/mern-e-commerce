import log from "../../assests/log.png";
import Button from "../Homepage/Button";
const Login = () => {
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
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="text-xl mt-20"
            />
            <hr className="my-2" />
            <input
              type="text"
              placeholder="Password"
              className="text-xl mt-10"
            />
            <hr className="my-2" />
            <div className="flex justify-between items-center mt-5">
              <Button title="Log In" height="2.5" width="7" />
              <a href="" className="text-orange-600 text-base">
                Forget Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
