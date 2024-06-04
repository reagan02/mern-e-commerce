import { useState } from "react";
import { UseAuthContext } from "./UseAuthContext";
import axios from "axios";

export const LoginHook = () => {
	const [error, setError] = useState(null);
	const { dispatch } = UseAuthContext();
	const login = async (account) => {
		setError(null);

		try {
			console.log("Logging in:", account);
			const response = await axios.post(
				"http://localhost:4000/api/accounts/login",
				account, // data
				{
					headers: { "Content-Type": "application/json" },
				} // config
			);
			localStorage.setItem("user", JSON.stringify(response.data));

			// update dispatch
			dispatch({
				type: "LOGIN",
				payload: response.data,
			});
			return true;
		} catch (error) {
			setError(getErrorMessage(error));
			console.log("Login failed:", error);
			return false;
		}
	};
	return { login, error };
};
// Helper function to extract error message
const getErrorMessage = (error) => {
	if (error.response && error.response.data && error.response.data.error) {
		return error.response.data.error;
	}
	return error.message;
};
