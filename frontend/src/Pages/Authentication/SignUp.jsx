import log from "../../assets/log.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInputs from "../../Components/Login/LoginInputs";
import { SignUpHook } from "../../Hooks/Authentication/SignUpHook";
import LoginButton from "../../Components/Login/LoginButton";
import { NavLink } from "react-router-dom";

const SignUp = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const account = { userName, email, password };
	const { signUp, error } = SignUpHook();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const isSuccessful = await signUp(account);
			if (isSuccessful) {
				navigate("/home");
				alert("Account created successfully");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex gap-1 xl:gap-5 xs:my-6 sm:my-8 lg:my-10 ">
			<img src={log} alt="" className="hidden lg:block lg:w-7/12 xl:w-2/3" />

			<div className=" w-full lg:ml-16 xl:ml-20 lg:mt-20 xl:mt-24">
				<h1 className="text-xl md:text-2xl xl:text-4xl font-inter font-semibold my-4 lg:my-5 lg:tracking-wider">
					Create an account
				</h1>
				<p className="lg:text-lg xl:text-xl ">Enter your details below</p>

				<form onSubmit={handleSubmit}>
					<div className="flex flex-col xs:gap-5 md:gap-8 lg:gap-10 mt-8 lg:mt-10">
						<div>
							<LoginInputs
								type="text"
								placeholder="Username"
								value={userName}
								function={(e) => {
									setUserName(e.target.value);
								}}
							/>
							<hr className="my-2" />
						</div>
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
					{error && <p className="text-red-500">{error}</p>}
					<div className="flex flex-col gap-5 mt-5">
						<LoginButton title="Sign Up" type="submit" />
						<LoginButton
							title="Sign up with Google"
							bgColor="bg-white"
							textColor="text-black"
						/>
					</div>
				</form>

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

export default SignUp;
