import log from "../../assets/log.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInputs from "../../Components/Login/LoginInputs";
import { LoginHook } from "../../Hooks/Authentication/LoginHook";
import LoginButton from "../../Components/Login/LoginButton";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const account = { email, password };
	const { login, error } = LoginHook();

	const navigate = useNavigate();

	// POST request to log in
	const handleSubmit = async (e) => {
		console.log(email, password);
		e.preventDefault();
		try {
			const isSuccessful = await login(account);
			if (isSuccessful) {
				navigate("/home");
				alert("Logged in successfully");
			}
		} catch (error) {
			console.error(error);
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

				<form onSubmit={handleSubmit}>
					{/* LOG IN FORM */}
					<div className="flex flex-col xs:gap-5 md:gap-8 lg:gap-10 mt-8 lg:mt-10">
						<div>
							<LoginInputs
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
							<LoginInputs
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
					{/* Display Error Message */}
					{error && <p className="text-red-500">{error}</p>}

					{/* Log In Button */}
					<div className="flex flex-col gap-5 mt-5 lg:mb-0 mb-20">
						<LoginButton title="Log In" type="submit" />
						<a href="" className="text-custom-red text-base">
							Forget Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
